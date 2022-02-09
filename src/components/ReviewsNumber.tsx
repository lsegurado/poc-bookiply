import styled from "@emotion/styled";
import { useAppSelector } from "../app/hooks";
import { selectTotal } from "../slices/reviewsSlice";

const ReviewsNumberHeadingText = styled.h1({
    margin: 0,
    color: '#173753',
    fontSize: '34px',
    fontWeight: 'bold',
    letterSpacing: 0,
    lineHeight: '45px',
})

export const ReviewsNumber = () => {
    const total = useAppSelector(selectTotal);

    return <ReviewsNumberHeadingText>{total} Reviews</ReviewsNumberHeadingText>
}