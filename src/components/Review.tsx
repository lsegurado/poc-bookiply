import { FC } from "react";
import { ReviewType } from "../types";
import { Channel } from "./Channel";
import { Feedback } from "./Feedback";
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
            <h1>{review.headline}</h1>
            <h1>{review.comment}</h1>
            <Feedback isPositive>{review.positiveFeedback}</Feedback>
            <Feedback>{review.negativeFeedback}</Feedback>
            <h1>{review.author}</h1>
            <h1>{review.publishedAt}</h1>
        </article>
    )
}