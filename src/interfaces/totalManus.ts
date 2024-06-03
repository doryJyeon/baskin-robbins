export interface TotalMenu {
  [menuType: string]: MenuInfo;
}

export interface MenuInfo {
  description: string;
  img_url: string;
  menus: {
    [flavorName: string]: Menu
  };
}

// menuDetail은 음료에만 있음
// isNew는 ice cream 이달의 맛 용
export interface Menu {
  img_url: string;
  color: string;
  tags: string;
  tag_color: string;
  menuDetail?: string;
  isNew?: string;
}
