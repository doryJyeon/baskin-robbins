const nowDate = new Date();

/**
 * 유효기간 체크용 (년-월-일 비교, 시간 X)
 * f: 유효 / t: 종료
 */
export const dateExpiredCheck = (getString: string) => {
  const getDate = new Date(`${getString} 23:59:59`);

  return getDate < nowDate
};

/**
 * date 가져오기
 */
export const getDate = (type: string) => {
  const weekOfDay = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    type === "Year" ? nowDate.getFullYear() :
      type === "nextMonth" ? Number(nowDate.getMonth()) + 2 :
        type === "month" ? Number(nowDate.getMonth()) + 1 :
          type === "date" ? nowDate.getDate() :
            type === "day" ? weekOfDay[nowDate.getDay()] :
              undefined
  )
}

/**
 * 잔여 일자 계산용
 */
export const remainingDate = (endString: string) => {
  const endTime = (new Date(endString)).getTime() - nowDate.getTime();
  const dDay = endTime / (1000 * 3600 * 24);

  return Math.ceil(dDay);
}