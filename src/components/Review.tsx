import { FC } from "react";
import { ReviewType } from "../types";
import { Channel } from "./Channel";
import { Feedback } from "./Feedback";
import { PublishedAt } from "./PublishedAt";
import { Score } from "./Score";

export type ReviewProps = {
    review: ReviewType,
} & JSX.IntrinsicElements['div']

export const Review: FC<ReviewProps> = ({ review, ...props }) => {
    return (
        <article {...props}>
            <section>
                <Score>{review.score}</Score>
                <Channel channelName={review.channel} />
            </section>
            <h2>{review.headline}</h2>
            <p>{review.comment}</p>
            <Feedback isPositive>{review.positiveFeedback}</Feedback>
            <Feedback>{review.negativeFeedback}</Feedback>
            <p>{review.author}</p>
            <PublishedAt date={review.publishedAt}/>
        </article>
    )
}