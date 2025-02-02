import { Command } from "./command.ts";
import { TextDocument } from "./textDocument.ts";

export class TextEditor {
  private doc: TextDocument;
  private undoStack: Command[];
  private redoStack: Command[];

  constructor() {
    this.doc = new TextDocument("untitled.txt");
    this.undoStack = [];
    this.redoStack = [];
  }
  execute(commands: Command[]) {
    commands.forEach(cmd => cmd.execute(this.doc));
    this.undoStack.push(...commands);
    this.redoStack = [];
  }
  undo() {
    const cmd = this.undoStack.pop();
    if (cmd) {
      cmd.undo(this.doc);
      this.redoStack.push(cmd);
    }
  }
  redo() {
    const cmd = this.redoStack.pop();
    if (cmd) {
      cmd.execute(this.doc);
      this.undoStack.push(cmd);
    }
  }
  view() {
    return `BasicEditor\n${this.doc.view()}`;
  }
  save(fileName: string) {
    const session = {
      document: this.doc.content,
      version: this.doc.version,
      undoStack: this.undoStack.map(cmd => cmd.toJSON()),
      redoStack: this.redoStack.map(cmd => cmd.toJSON()),
    };
    Deno.writeTextFileSync(`command-pattern/${fileName}`, JSON.stringify(session));
  }
  load(fileName: string) {
    const file = Deno.readTextFileSync(`command-pattern/${fileName}`);
    if (file) {
      const session = JSON.parse(file);
      this.doc = new TextDocument(fileName);
      this.doc.content = session.document;
      this.doc.version = session.version;
      this.undoStack = session.undoStack.map((cmd: string) => Command.fromJSON(cmd));
      this.redoStack = session.redoStack.map((cmd: string) => Command.fromJSON(cmd));
    } else {
      throw new Error("file not found");
    }
  }
  close() {
    this.redoStack = [];
    this.undoStack = [];
  }
}
