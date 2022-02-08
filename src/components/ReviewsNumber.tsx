import styled from "@emotion/styled";
import { useAppSelector } from "../app/hooks";
import { selectTotal } from "../slices/reviewsSlice";

const ReviewsNumberHeadingText = styled.h1({
    margin: 0
})

export const ReviewsNumber = () => {
    const total = useAppSelector(selectTotal);

    return <ReviewsNumberHeadingText>{total} Reviews</ReviewsNumberHeadingText>
}