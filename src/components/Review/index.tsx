import { FC } from "react";
import { GetReviewsResponseType } from "../../types";
import { Channel } from "../Channel";
import { Feedback } from "../Feedback";
import { PublishedAt } from "../PublishedAt";
import { Score } from "../Score";
import styles from './Review.module.css'

export type ReviewProps = {
    review: GetReviewsResponseType,
}

/**
 * A component that displays the data of a review
 */
export const Review: FC<ReviewProps> = ({ review, ...props }) => {
    return (
        <article className={styles.article} {...props}>
            <section className={styles.reviewSection}>
                <Score>{review.score.toFixed(1)}</Score>
                <Channel channelName={review.channel} />
            </section>
            <h2 className={styles.headline}>{review.headline}</h2>
            <p className={styles.comment}>{review.comment}</p>
            <Feedback className={styles.feedback} isPositive>{review.positiveFeedback}</Feedback>
            <Feedback className={styles.feedback}>{review.negativeFeedback}</Feedback>
            <p className={styles.author}>{review.author}</p>
            <PublishedAt className={styles.publishedAt} date={review.publishedAt}/>
        </article>
    )
}