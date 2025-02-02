import { Command } from "./command.ts";
import { TextDocument } from "./textDocument.ts";

const doc = new TextDocument("notes");

const insert = new Command("insert", { text: "hello world" });
const insert2 = new Command("insert", { text: "hello world 2" });
const replace = new Command("replace", { oldText: "hello", newText: "hi" });

insert.execute(doc);
insert2.execute(doc);
replace.execute(doc);

console.log(doc.view());

replace.undo(doc);

console.log(doc.view());

// insert.undo(doc)

// console.log(doc.view())
