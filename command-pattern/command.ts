import { TextDocument } from "./textDocument.ts";
import { ICommand } from "./types.ts";

export class Command implements ICommand<TextDocument> {
  type: string;
  data: Record<string, string | number | undefined>;
  protected lastInsertionIndex: number = -1;
  protected lastDeletedText: string = "";
  constructor(type: string, data: Record<string, string | number | undefined>) {
    this.type = type;
    this.data = data;
  }
  execute(doc: TextDocument): void {
    switch (this.type) {
      case "insert": {
        const { text, position } = this.data as { text: string; position: undefined };
        this.lastInsertionIndex = doc.insert(text, position);
        break;
      }
      case "delete": {
        const { start, end } = this.data as { start: number; end: number };
        this.lastDeletedText = doc.delete(start, end);
        break;
      }
      case "replace": {
        const { oldText, newText } = this.data as { oldText: string; newText: string };
        doc.replace(oldText, newText);
        break;
      }
      default: {
        throw new Error("Unsupported Operation");
      }
    }
  }
  undo(doc: TextDocument): void {
    switch (this.type) {
      case "insert": {
        const { text } = this.data as { text: string; position: undefined };
        doc.delete(this.lastInsertionIndex - text.length, this.lastInsertionIndex - 1);
        break;
      }
      case "delete": {
        const { start } = this.data as { start: number; end: number };
        doc.insert(this.lastDeletedText, start);
        break;
      }
      case "replace": {
        const { oldText, newText } = this.data as { oldText: string; newText: string };
        doc.replace(newText, oldText);
        break;
      }
      default: {
        throw new Error("Unsupported Operation");
      }
    }
  }
  toJSON() {
    return JSON.stringify({
      data: this.data,
      type: this.type,
      lastInsertionIndex: this.lastInsertionIndex,
      lastDeletedText: this.lastDeletedText,
    });
  }
  static fromJSON(command: string) {
    const parsedCommand = JSON.parse(command) as Command;
    const cmd = new Command(parsedCommand.type, parsedCommand.data);
    cmd.setLastDeletedText(parsedCommand.lastDeletedText);
    cmd.setLastInsertionIndex(parsedCommand.lastInsertionIndex);
  }
  protected setLastInsertionIndex(index: number) {
    this.lastInsertionIndex = index;
  }
  protected setLastDeletedText(text: string) {
    this.lastDeletedText = text;
  }
}
