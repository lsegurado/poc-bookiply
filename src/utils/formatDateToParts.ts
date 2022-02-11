/**
 * 
 * @param date A date in string format
 * @returns An object with the day in numeric format, the month in text, and the year in numeric format
 * example: {
 * day: 11, month: August, year: 2020
 * }
 */
export const formatDateToParts = (date: string) => {
    const parsedDate = new Date(date);

    const [month, , day, , year] = Intl.DateTimeFormat('en', { day: 'numeric', month: 'long', year: 'numeric' }).formatToParts(parsedDate);

    return {
        month: month.value,
        day: day.value,
        year: year.value
    }
}