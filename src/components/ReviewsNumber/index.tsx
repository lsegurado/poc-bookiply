import styled from "@emotion/styled";
import { useAppSelector } from "../../app/hooks";
import { selectTotal } from "../../slices/reviewsSlice";

const ReviewsNumberHeadingText = styled.h1({
    margin: 0,
    fontSize: '34px',
    fontWeight: 'bold',
    letterSpacing: 0,
    lineHeight: '45px',
})

export const ReviewsNumber = () => {
    const total = useAppSelector(selectTotal);

    return <ReviewsNumberHeadingText>{total && total > 0 ? `${total} Reviews`: null} </ReviewsNumberHeadingText>
}