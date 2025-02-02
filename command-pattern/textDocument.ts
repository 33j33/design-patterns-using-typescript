// Receiver - Peforms the actions on the Doc
export class TextDocument {
  private content: string;
  private version: number;
  title: string;

  constructor(title: string) {
    this.title = title;
    this.content = "";
    this.version = 0;
  }

  insert(text: string, position: number | null = null): number {
    if (position === null || position > this.content.length) {
      this.content += text;
      this.version++;
    } else {
      this.content = this.content.slice(0, position) + text + this.content.slice(position);
      this.version++;
    }
    return position === null ? this.content.length : position + text.length;
  }
  delete(start: number, end: number): string {
    if (start < 0 || end <= 0 || this.content.length <= 0) return "";
    const deletedText = this.content.slice(start, end + 1);
    this.content = this.content.slice(0, start) + this.content.slice(end + 1);
    this.version++;
    return deletedText;
  }
  replace(oldText: string, newText: string): number {
    this.content = this.content.replaceAll(oldText, newText);
    this.version++;
    return this.content.lastIndexOf(newText) + newText.length;
  }

  view() {
    const header = `=== ${this.title} V${this.version} ===`;
    const footer = "=".repeat(header.length);
    return `${header}\n${this.content}\n${footer}`;
  }
}
