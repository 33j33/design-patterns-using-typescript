import { Directory } from "./directory.composite.ts";
import { File as File_ } from "./file.leaf.ts";

const root = new Directory("root");
const docs = new Directory("docs");
const pics = new Directory("pics");

const file1 = new File_("notes.txt", 10000);
const file2 = new File_("sidney.jpeg", 4028);
const file3 = new File_("resume.pdf", 3534);
const file4 = new File_("cat.png", 3002);

root.add(docs);
root.add(pics);

file1.print(""); // 📄 notes.txt (10000 KB)

docs.add(file1);
docs.add(file3);

pics.add(file2);
pics.add(file4);

root.print(" ");
/**
  📁 root/  (20564 KB)
    📁 docs/  (13534 KB)
        📄 notes.txt (10000 KB)
        📄 resume.pdf (3534 KB)
    📁 pics/  (7030 KB)
        📄 sidney.jpeg (4028 KB)
        📄 cat.png (3002 KB)
 */
