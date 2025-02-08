export interface MenuItem {
  name: string;
  children?: MenuItem[];
}

export interface MenuItemWithDepth extends MenuItem {
  depth: number;
}
