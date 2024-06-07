interface NewItem {
  0: string,
  1: string,
  2: string
}

/**
 * [
 *  img name,
 *  title, 
 *  arrow color
 * ]
 */

// 내부 배열의 타입 정의 (5개의 DataRow 배열)
type NewItems = [NewItem, NewItem, NewItem, NewItem, NewItem];

export const NewItemData: NewItems[] = [
  [
    [
      "wonderland_shooting_star.jpg",
      "이상한 나라의 슈팅스타",
      "#cdb4db"
    ],
    [
      "wachuone_shake.jpg",
      "와츄원 쉐이크",
      "#cdb4db"
    ],
    [
      "pink_flower.jpg",
      "핑크 플라워 포 유",
      "#ffb5a7"
    ],
    [
      "blooming_flower.jpg",
      "블루밍 플라워 인 러브",
      "#ffc9b9"
    ],
    [
      "dinosaur_cake.jpg",
      "다이노소어 스윗 월드",
      "#a7c957"
    ]
  ],
  [
    [
      "dino_jelly.jpg",
      "디노 젤리",
      "#f77f00"
    ],
    [
      "earl_gray_blast.jpg",
      "얼그레이 밀크티 블라스트",
      "#f77f00"
    ],
    [
      "apple_mango.jpg",
      "애플망고 젤라또",
      "#fcbf49"
    ],
    [
      "grapefruit_black_tea.jpg",
      "자몽 블랙티 블라스트",
      "#fcbf49"
    ],
    [
      "pistachio.jpg",
      "피스타치오 젤라또",
      "#f86624"
    ]
  ]
]