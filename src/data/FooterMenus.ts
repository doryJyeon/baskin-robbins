interface MenuDetail {
  // menuName : url, siteMove?
  [key: string]: [string, boolean];
}

interface Menus {
  [key: string]: MenuDetail;
}

export const footerMenus: Menus = {
  "Menu": {
    "이달의 맛": ["menu/month", false],
    "아이스크림": ["menu/ice_cream", false],
    "블록팩/레디팩": ["menu/prepack", false],
    "아이스크림 케이크": ["menu/ice_cream_cake", false],
    "디저트": ["menu/dessert", false],
    "음료": ["menu/beverage", false],
    "커피": ["menu/coffee", false],
  },
  "BR Play": {
    "이벤트": ["play/event/all", false],
    "배라광장": ["play/plaza", false]
  },
  "BR Story": {
    "이달의 맛 히스토리": ["story/history", false],
    "Be Better": ["story/be_better", false]
  },
  "Delivery/Store": {
    "배달주문": ["store/delivery", false],
    "단체주문": ["store/cetring", false]
  }
}