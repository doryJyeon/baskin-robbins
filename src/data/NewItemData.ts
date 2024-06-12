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
      "would_u_like_bonbon.png",
      "우주 라이크 봉봉",
      "#621708"
    ],
    [
      "bonbon_blast.png",
      "우주 라이크 봉봉 블라스트",
      "#582f0e"
    ],
    [
      "bonbon_mozzi.png",
      "우주 라이크 봉봉 모찌",
      "#43281c"
    ],
    [
      "bonbon_cake.png",
      "우주 라이크 봉봉 케이크",
      "#43291f"
    ],
    [
      "bonbon_sundae.png",
      "우주 라이크 봉봉 선데",
      "#9c6644"
    ]
  ],
  [
    [
      "dino_jelly.jpg",
      "디노 젤리",
      "#283618"
    ],
    [
      "rice_blast.png",
      "바사삭 쌀튀밥 팥빙 블라스트",
      "#660708"
    ],
    [
      "rice_bingsu.png",
      "바사삭 쌀튀밥 팥빙수",
      "#590d22"
    ],
    [
      "mangbing_blast.png",
      "솔티크림 망빙 블라스트",
      "#f77f00"
    ],
    [
      "mango_bingsu.png",
      "솔티크림 망고빙수",
      "#ff9505"
    ]
  ]
]