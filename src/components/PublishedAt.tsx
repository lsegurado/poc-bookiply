import { FC } from "react";
import { formatDateToParts } from "../utils/formatDateToParts";

type PublishedAtProps = { date: string } & JSX.IntrinsicElements['span']

/**A component that displays the publication date of a review */
export const PublishedAt: FC<PublishedAtProps> = ({ date, ...props }) => {
    const { day, month, year } = formatDateToParts(date);

    return (
        <span {...props}>
            Reviewed {day} {month} {year}
        </span>
    )
}