import { mockReviews } from "./reviews";

export const mockGetReviewsResponse = {
    value: mockReviews.map(({id, ...review}) => review),
    total: mockReviews.length
}