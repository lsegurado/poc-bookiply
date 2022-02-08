import { FC } from "react";

export const PublishedAt: FC<{ date: string }> = ({ date }) => {
    const parsedDate = new Date(date);

    const [month, _literal, day, _literal2, year] = Intl.DateTimeFormat('en', { day: 'numeric', month: 'long', year: 'numeric' }).formatToParts(parsedDate);

    return <span>
        Reviewed {day.value} {month.value} {year.value}
    </span>
}