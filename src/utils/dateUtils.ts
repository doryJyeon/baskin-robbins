/**
 * 유효기간 체크용 (년-월-일 비교, 시간 X)
 * f: 유효 / t: 종료
 */
export const dateExpiredCheck = (getString: string) => {
  const getDate = new Date(`${getString} 23:59:59`);
  const nowDate = new Date();

  return getDate < nowDate
};

/**
 * date 가져오기
 */
export const getDate = (type: string) => {
  const weekOfDay = ["일", "월", "화", "수", "목", "금", "토"];
  const nowDate = new Date();
  return (
    type === "Year" ? nowDate.getFullYear() :
      type === "nextMonth" ? Number(nowDate.getMonth()) + 2 :
        type === "month" ? Number(nowDate.getMonth()) + 1 :
          type === "date" ? nowDate.getDate() :
            type === "day" ? weekOfDay[nowDate.getDay()] :
              undefined
  )
}