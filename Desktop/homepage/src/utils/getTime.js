const date = new Date()
function getTime () {
    const year = new Date().getFullYear();
      // 计算二月有多少天
      const nowTwo = new Date(`${year}-03-01`);
      nowTwo.setDate(0);
      const twoDay = nowTwo.getDate();
      // 计算一年总天数 7个月有31天 4个月有30天
      const day = 31 * 7 + 4 * 30 + twoDay;
      const yearStart = new Date(`${year}-01-01 00:00:00`).getTime();
      const yearEnd = new Date().getTime();
      // 计算今年过了多少天
      const time = Math.floor((yearEnd - yearStart) / (24 * 60 * 60 * 1000));
      return time / day
}
function gettoday() {
        const oneday = 24 * 60 * 60
        const now = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()
        const persent = now / oneday
        return persent
}
function getmonth() {
    const month = 31
    const now = date.getDate()
    return month / now
}
    

export {gettoday, getTime, getmonth}