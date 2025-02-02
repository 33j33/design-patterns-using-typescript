import { Command } from "./command.ts";
import { TextEditor } from "./textEditor.ts";

const textEditor = new TextEditor();

textEditor.execute([new Command("insert", { text: "hello world" }), new Command("insert", { text: "\nhello earth" })]);
textEditor.execute([new Command("replace", { oldText: "hello", newText: "hi" })]);

console.log(textEditor.view());
/**
BasicEditor
=== untitled.txt V3 ===
hi world
hi earth
================
 */

textEditor.undo(); // replace undone
textEditor.undo(); // insert undone
console.log(textEditor.view());
/**
BasicEditor
=== untitled.txt V5 ===
hello world
================
 */

textEditor.redo();
console.log(textEditor.view()); // previous insert redone
/**
BasicEditor
=== untitled.txt V6 ===
hello world
hello earth
 */

textEditor.save("notes.txt");
textEditor.close();

const textEditor2 = new TextEditor(); // another text editor instance loading the notes file

textEditor2.load("notes.txt");
console.log(textEditor2.view());

textEditor2.execute([new Command("delete", { start: 0, end: 5 })]);
console.log(textEditor2.view());

/**
BasicEditor
=== notes.txt V7 ===
world
hello earth
================
 */

textEditor2.undo(); // undo delete
console.log(textEditor2.view());
/**
BasicEditor
=== notes.txt V8 ===
hello world
hello earth
================
 */
