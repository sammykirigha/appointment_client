
export const FormatDateToDDMMYYYY = (date) => {
    const _date = new Date(date);
    var strArray=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var d = _date.getDate();
    var m = strArray[_date.getMonth()];
    var y = _date.getFullYear();
    return '' + m + '-' + (d <= 9 ? '0' + d : d) + '-' + y;
}