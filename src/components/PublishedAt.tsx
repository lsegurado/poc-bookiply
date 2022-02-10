import { FC } from "react";
import { formatDateToParts } from "../utils/formatDateToParts";

export const PublishedAt: FC<{ date: string }> = ({ date }) => {
    const { day, month, year } = formatDateToParts(date);

    return <span>
        Reviewed {day} {month} {year}
    </span>
}