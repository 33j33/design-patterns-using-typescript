import { Command } from "./command.ts";
import { TextDocument } from "./textDocument.ts";
import { TextEditor } from "./textEditor.ts";

const notesDoc = new TextDocument("Notes");
const textEditor = new TextEditor(notesDoc);

textEditor.execute([new Command("insert", { text: "hello world" }), new Command("insert", { text: "\nhello earth" })]);
textEditor.execute([new Command("replace", { oldText: "hello", newText: "hi" })]);

console.log(textEditor.view());
/**
BasicEditor
=== Notes V3 ===
hi world
hi earth
================
 */

textEditor.undo(); // replace undone
textEditor.undo(); // insert undone
console.log(textEditor.view());
/**
BasicEditor
=== Notes V5 ===
hello world
================
 */

textEditor.redo();
console.log(textEditor.view()); // previous insert redone
/**
BasicEditor
=== Notes V6 ===
hello world
hello earth
 */

textEditor.execute([new Command("delete", { start: 0, end: 5 })]);
console.log(textEditor.view());

/**
BasicEditor
=== Notes V7 ===
world
hello earth
================
 */

textEditor.undo(); // undo delete
console.log(textEditor.view());
/**
BasicEditor
=== Notes V8 ===
hello world
hello earth
================
 */
