import {useTranslation} from 'react-i18next';

function FormatDateAsText(props){
    const curDate = props.date;

    const gap = Date.now() - curDate;
    const gapSec = gap / 1000;
    const gapMin = gapSec / 60;
    const gapHour = gapMin / 60;
    const gapDay = gapHour / 24;
    const gapMonth = gapDay / 30;
    const gapYear = gapMonth / 12;

    const {t} = useTranslation();

    if (gapHour <= 24) {
        if (Math.floor(gapMin) < 1) {
            if (Math.floor(gapSec) <= 0) {
                return t('DateText_Now');
            } else {
                return Math.floor(gapSec) + t('DateText_Seconds');
            }
        } else if (Math.floor(gapHour) < 1) {
            return Math.floor(gapMin) + t('DateText_Minutes');
        } else {
            return Math.floor(gapHour) + t('DateText_hours')
        }
    } else {
        if (gapYear >= 1) {
            return Math.floor(gapYear) + t('DateText_Years');
        } else if (gapMonth >= 1) {
            return Math.floor(gapMonth) + t('DateText_Months');
        } else {
            return Math.floor(gapDay) + t('DateText_Days');
        }
    }
}
export default FormatDateAsText;