function FormatDateAsText(props){
    const curDate = props.date;
    const nowDate = new Date();

    const gap = nowDate.getTime() - curDate;
    const gapSec = gap / 1000;
    const gapMin = gapSec / 60;
    const gapHour = gapMin / 60;
    const gapDay = gapHour / 24;
    const gapMonth = gapDay / 30;
    const gapYear = gapMonth / 12;

    if (gapHour <= 24) {
        if (Math.floor(gapMin) < 1) {
            if (Math.floor(gapSec) <= 0) {
                return "방금";
            } else {
                return Math.floor(gapSec) + "초 전";
            }
        } else if (Math.floor(gapHour) < 1) {
            return Math.floor(gapMin) + "분 전";
        } else {
            return Math.floor(gapHour) + "시간 전"
        }
    } else {
        if (gapYear >= 1) {
            return Math.floor(gapYear) + "년 전";
        } else if (gapMonth >= 1) {
            return Math.floor(gapMonth) + "개월 전";
        } else {
            return Math.floor(gapDay) + "일 전";
        }
    }
}
export default FormatDateAsText;