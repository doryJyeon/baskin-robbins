interface MenuDetail {
  // menuName : url, siteMove?
  [key: string]: [string, boolean];
}

interface Menus {
  [key: string]: MenuDetail;
}

export const footerMenus: Menus = {
  "Menu": {
    "이달의 맛": ["none", false],
    "아이스크림": ["none", false],
    "블록팩/레디팩": ["none", false],
    "아이스크림 케이크": ["none", false],
    "디저트": ["none", false],
    "음료": ["none", false],
    "커피": ["none", false],
  },
  "BR Play": {
    "이벤트": ["none", false],
    "배라광장": ["none", false]
  },
  "BR Story": {
    "이달의 맛 히스토리": ["none", false],
    "Be Better": ["none", false]
  },
  "Delivery/Store": {
    "배달주문": ["none", false],
    "단체주문": ["none", false]
  }
}