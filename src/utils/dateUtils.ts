/**
 * 유효기간 체크용 (년-월-일 비교, 시간 X)
 * f: 유효 / t: 종료
 */
export const dateExpiredCheck = (getString: string) => {
  const getDate = new Date(`${getString} 23:59:59`);
  const nowDate = new Date();

  return getDate < nowDate
};
