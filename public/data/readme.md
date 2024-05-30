## JSON 설명
### TotalMenus

```
{
  "menu name" : {
    "description" : "menu description",
    "img url": "폴더명/",
    "menus" : {
      "flavor name": {
        "img_url" : "파일명만 전부 다 .png 여서 확장자 생략",
        "color" : "bg & name color",
        "tags": "hover - flavor tag",
        "tag_color": "hover - tag color"
      },
      "flavor name": {
        "img_url" : "",
        "color" : "",
        "tags": "",
        "tag_color": ""
      }
    }
  }
}
```

* 검색 시 제품명으로 검색해야함.
BR play/event

### Events

```
{
  "id": {
    "title" : "string",
    "img" : "(promotion|benefit)/url.(jpg|png)",
    "type" : "(promotion|benefit)",
    "start": "(start date|null)",
    "end": "(end date|소진 시 까지|상시운영)"
  },
}
```

### FlavorHistory
/story/history

```
{
  "year": {
    "2024": [
      "img dir/",
      ["img url", "", ...]
    ],
    "2023": [
      "img dir/",
      ["img url", "", ...]
    ],
    ...
  },
  "thema": {
    "back": [
      "img dir/",
      ["img url", "", ...]
    ],
    "legend": [
      "img dir/",
      ["img url", "", ...]
    ],
    "great": [
      "img dir/",
      ["img url", "", ...]
    ]
  }
}
```