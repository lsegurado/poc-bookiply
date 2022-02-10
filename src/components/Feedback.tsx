import { FC } from "react";
import styled from "@emotion/styled";
import { feedbackImages } from "../constants/feedbackImages";

type FeedbackProps = {
    isPositive?: boolean;
} & JSX.IntrinsicElements['p']

const positiveFeedbackProps: JSX.IntrinsicElements['img'] = {
    alt: 'Positive feedback',
    src: feedbackImages.thumbUp
}
const negativeFeedbackProps: JSX.IntrinsicElements['img'] = {
    alt: 'Negative feedback',
    src: feedbackImages.thumbDown
}

const FeedbackImg = styled.img({
    marginRight: '10px',
    verticalAlign: 'text-bottom'
})

export const Feedback: FC<FeedbackProps> = ({ isPositive, children, className, ...props }) => {
    return children ? (
        <p {...props}><FeedbackImg {...(isPositive ? positiveFeedbackProps : negativeFeedbackProps)} />{children}</p>
    ) : null
}