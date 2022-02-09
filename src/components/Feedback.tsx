import { FC } from "react";
import thumbUp from '../assets/thumb-up.svg';
import thumbDown from '../assets/thumb-down.svg';
import styled from "@emotion/styled";

type FeedbackProps = {
    isPositive?: boolean;
} & JSX.IntrinsicElements['p']

const positiveFeedbackProps: JSX.IntrinsicElements['img'] = {
    alt: 'Positive feedback',
    src: thumbUp
}
const negativeFeedbackProps: JSX.IntrinsicElements['img'] = {
    alt: 'Negative feedback',
    src: thumbDown
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