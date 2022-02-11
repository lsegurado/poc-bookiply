import { render, RenderResult } from "@testing-library/react";
import { Review } from ".";
import { channelImages } from "../../constants/channelImages";
import { feedbackImages } from "../../constants/feedbackImages";
import { filterOptionsByScore } from "../../constants/filterOptionsByScore";
import { formatDateToParts } from "../../utils/formatDateToParts";
import { mockReviews } from "../../__fixtures__/reviews";

const review = mockReviews[1];
const {
    headline,
    comment,
    author,
    positiveFeedback,
    negativeFeedback,
    score,
    channel,
    publishedAt
} = review

describe('Review component', () => {
    let el: RenderResult;
    beforeEach(() => {
        el = render(<Review review={review} />);
    })
    it(`should match snapshot`, () => {
        expect(el).toMatchSnapshot();
    })
    it(`should render a score`, () => {
        expect(el.getByText(`${score.toFixed(1)} / ${filterOptionsByScore.maximumScore}`)).toBeDefined();
    })
    it(`should render a channel`, () => {
        expect(el.getAllByRole('img')[0].getAttribute('src')).toBe(channelImages[channel]);
    })
    it(`should render a headline`, () => {
        expect(el.getByText(headline)).toBeDefined();
    })
    it(`should render a comment`, () => {
        expect(el.getByText(comment)).toBeDefined();
    })
    it(`should render a positive feedback`, () => {
        expect(el.getAllByRole('img')[1].getAttribute('src')).toBe(feedbackImages.thumbUp);
        expect(el.getByText(positiveFeedback as string)).toBeDefined();
    })
    it(`should render a negative feedback`, () => {
        expect(el.getAllByRole('img')[2].getAttribute('src')).toBe(feedbackImages.thumbDown);
        expect(el.getByText(negativeFeedback as string)).toBeDefined();
    })
    it(`should render an author`, () => {
        expect(el.getByText(author)).toBeDefined();
    })
    it(`Should render a publish date`, () => {
        const { day, month, year } = formatDateToParts(publishedAt);
        expect(el.getByText(`Reviewed ${day} ${month} ${year}`)).toBeDefined();
    })
});