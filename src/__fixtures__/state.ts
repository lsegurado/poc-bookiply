import { RootState } from "../app/store";
import { initialState as initialStateReviews } from "../slices/reviewsSlice";
import { initialState as initialStateReviewsFilters } from "../slices/reviewsFiltersSlice";
import { mockReviews } from "./reviews";

export const idleState: RootState = {
    reviews: {
        reviews: mockReviews,
        status: 'idle',
        total: mockReviews.length
    },
    reviewsFilter: initialStateReviewsFilters
}
export const loadingState: RootState = {
    reviews: {
        ...initialStateReviews,
        status: 'loading'
    },
    reviewsFilter: initialStateReviewsFilters
}
export const failedState: RootState = {
    reviews: {
        ...initialStateReviews,
        status: 'failed'
    },
    reviewsFilter: initialStateReviewsFilters
}
export const idleWithNoResultsState: RootState = {
    reviews: initialStateReviews,
    reviewsFilter: initialStateReviewsFilters
}
export const mockState = jest.fn(() => idleState)