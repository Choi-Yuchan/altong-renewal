function TimeToggle(data) {
    const upDate = new Date(data);
    const year = upDate.getFullYear();
    const month = upDate.getMonth() + 1;
    const date = upDate.getDate();
    const hours = upDate.getHours();
    const minutes = upDate.getMinutes();
    const seconds = upDate.getSeconds();

    const monthText = () => {
        if (month < 10) {
        return '0' + month;
        } else {
        return month;
        }
    }
    const dateText = () => {
        if (date < 10) {
        return '0' + date;
        } else {
        return date;
        }
    }
    const hoursText = () => {
        if (hours < 10) {
        return '0' + hours;
        } else {
        return hours;
        }
    }
    const minutesText = () => {
        if (minutes < 10) {
        return '0' + minutes;
        } else {
        return minutes;
        }
    }
    const secondsText = () => {
        if (seconds < 10) {
        return '0' + seconds;
        } else {
        return seconds;
        }
    }
    return `${year}-${monthText()}-${dateText()} ${hoursText()}:${minutesText()}:${secondsText()} UTC+9`
}
export default TimeToggle;