import { mockGetReviewsResponse } from "../__fixtures__/getReviewsResponse";

jest.mock('../apis/ReviewsAPI', () => ({
    ReviewsAPI: jest.fn().mockImplementation(() => ({
        getReviews() {
            return mockGetReviewsResponse
        }
    }))
}));
