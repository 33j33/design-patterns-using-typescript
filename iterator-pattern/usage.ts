// Example 1 - Menu Iterator

import { MenuIterator } from "./example1/menuIterator.ts";
import { MenuItem } from "./example1/types.ts";

const menu: MenuItem = {
  name: "Home",
  children: [
    {
      name: "File",
      children: [
        { name: "New Text File" },
        { name: "New File" },
        { name: "Open", children: [{ name: "Open Recent" }] },
      ],
    },
    {
      name: "Settings",
      children: [{ name: "Theme" }, { name: "Extensions" }],
    },
  ],
};

const depthTwoIterator = new MenuIterator(menu, 2);
const depthThreeIterator = new MenuIterator(menu, 3);

let result: IteratorResult<MenuItem & { depth: number }>;

while (true) {
  result = depthTwoIterator.next();
  if (result.done) break;
  console.log("-".repeat(result.value.depth) + result.value.name);
}
/**
-Home
--File
--Settings
*/

while (true) {
  result = depthThreeIterator.next();
  if (result.done) break;
  console.log("-".repeat(result.value.depth) + result.value.name);
}
/**
-Home
--File
---New Text File
---New File
---Open
--Settings
---Theme
 */
