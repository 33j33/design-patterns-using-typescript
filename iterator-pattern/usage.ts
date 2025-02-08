// Example 1 - Menu Iterator
// Use Cases
// Show hierarchy up to certain levels in Breadcrumb Navigation.
// Limit navigation depth for screen readers
// Create partial sitemaps with depth constraints
// Optimize UI rendering of deep hierarchies by limiting traversal

import { Menu } from "./example1/menu.ts";
import { MenuItem, MenuItemWithDepth } from "./example1/types.ts";

const menuData: MenuItem = {
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

const menu = new Menu(menuData);
const depthTwoIterator = menu.getIterator(2);
const depthThreeIterator = menu.getIterator(3);

let result: IteratorResult<MenuItemWithDepth>;

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

// Defining [Symbol.iterator]() for iterator allows native traversal using for..of
for (const item of depthThreeIterator) {
  console.log("-".repeat(item.depth) + item.name);
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
