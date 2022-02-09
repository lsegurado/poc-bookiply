import { FC } from "react";
import { useAppSelector } from "../app/hooks";
import { selectReviewsFilters } from "../slices/reviewsFiltersSlice";
import { selectReviews } from "../slices/reviewsSlice";
import { Review } from "./Review";

export const ReviewsList: FC = () => {
    const reviews = useAppSelector(selectReviews);
    const filters = useAppSelector(selectReviewsFilters);

    return (
        <>
            {reviews.map((review, i) => (
                // TODO: Change this
                <Review key={`${filters._page}${i}`} review={review} />
            ))}
        </>
    )
}