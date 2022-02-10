import { RootState } from "../app/store";
import { initialState } from "../slices/reviewsFiltersSlice";
import { mockReviews } from "./reviews";

export const mockState: RootState = {
    reviews: {
        reviews: mockReviews,
        status: 'idle',
        total: mockReviews.length
    },
    reviewsFilter: initialState
}