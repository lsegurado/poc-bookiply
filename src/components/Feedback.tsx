import { memo } from "react";
import styled from "@emotion/styled";
import { feedbackImages } from "../constants/feedbackImages";

type FeedbackProps = {
    isPositive?: boolean;
} & JSX.IntrinsicElements['p']

const positiveFeedbackProps: JSX.IntrinsicElements['img'] & Pick<FeedbackProps, 'isPositive'> = {
    alt: 'Positive feedback',
    src: feedbackImages.thumbUp,
    isPositive: true,
}
const negativeFeedbackProps: JSX.IntrinsicElements['img'] & Pick<FeedbackProps, 'isPositive'> = {
    alt: 'Negative feedback',
    src: feedbackImages.thumbDown,
    isPositive: false,
}

const FeedbackImg = styled.img<Pick<FeedbackProps, 'isPositive'>>(props => ({
    marginRight: props.isPositive ? '10px': '12px',
    verticalAlign: 'text-bottom',
}))

/**A component that displays feedback from a review */
export const Feedback = memo<FeedbackProps>(({ isPositive, children, className, ...props }) => {
    return children ? (
        <p {...props}><FeedbackImg {...(isPositive ? positiveFeedbackProps : negativeFeedbackProps)} />{children}</p>
    ) : null
})