export interface TotalMenu {
  [menuType: string]: MenuInfo;
}

export interface MenuInfo {
  description: string;
  img_url: string;
  menus: Menus;
}

interface Menus {
  menuName: {
    img_url: string;
    color: string;
    tags: string;
    tag_color: string;
  }
}
