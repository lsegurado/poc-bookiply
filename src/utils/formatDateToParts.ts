export const formatDateToParts = (date: string) => {
    const parsedDate = new Date(date);

    const [month, , day, , year] = Intl.DateTimeFormat('en', { day: 'numeric', month: 'long', year: 'numeric' }).formatToParts(parsedDate);

    return {
        month: month.value,
        day: day.value,
        year: year.value
    }
}