import { FC } from "react";
import thumbUp from '../../assets/thumb-up.svg';
import thumbDown from '../../assets/thumb-down.svg';
import styles from './feedback.module.css'

type FeedbackProps = {
    isPositive?: boolean;
}

const positiveFeedbackProps: JSX.IntrinsicElements['img'] = {
    alt: 'Positive feedback',
    src: thumbUp
}
const negativeFeedbackProps: JSX.IntrinsicElements['img'] = {
    alt: 'Negative feedback',
    src: thumbDown
}

export const Feedback: FC<FeedbackProps> = ({ isPositive, children }) => {
    return children ? (
        <section className={styles.feedback}>
            <img {...(isPositive ? positiveFeedbackProps : negativeFeedbackProps)} />
            <p>{children}</p>
        </section>
    ): null
}