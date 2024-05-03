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
    "배라광장": ["none", false],
    "BR레시피": ["none", false],
    "마이플레이버리스트": ["none", false]
  },
  "BR Story": {
    "브랜드 스토리": ["none", false],
    "이달의 맛 히스토리": ["none", false],
    "Be Better": ["none", false]

  },
  "Delivery/Store": {
    "매장 찾기": ["none", false],
    "100flavor 플래그십스토어": ["none", false],
    "Flow 매장": ["none", false],
    "점포개설문의": ["none", false],
    "배달주문": ["none", false],
    "단체주문": ["none", false]

  },
  "Information Center": {
    "고객센터": ["none", false],
    "소비자중심경영(CCM)": ["none", false],
    "칭찬점포": ["none", false],
    "공지사항": ["none", false],
    "보도자료": ["none", false]
  }
}