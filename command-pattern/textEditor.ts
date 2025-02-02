// undo stack, redo stack
// execute, undo, redo

import { Command } from "./command.ts";
import { TextDocument } from "./textDocument.ts";

export class TextEditor {
  private doc: TextDocument;
  private undoStack: Command[];
  private redoStack: Command[];

  constructor(doc: TextDocument) {
    this.doc = doc;
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
}
