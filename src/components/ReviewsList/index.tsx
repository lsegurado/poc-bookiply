import { FC } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectReviews } from "../../slices/reviewsSlice";
import { Review } from "../Review";

export const ReviewsList: FC = () => {
    const reviews = useAppSelector(selectReviews);

    return (
        <>
            {reviews.map(review => <Review key={review.id} review={review} />)}
        </>
    )
}