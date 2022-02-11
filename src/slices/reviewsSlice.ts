import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ReviewsAPI } from '../apis/ReviewsAPI';
import { RootState } from '../app/store';
import { GetReviewsParamsType, ReviewType } from '../types';
import { nanoid } from 'nanoid';

export interface ReviewsState {
  reviews: ReviewType[];
  status: 'idle' | 'loading' | 'failed';
  total: number | null
}

export const initialState: ReviewsState = {
  reviews: [],
  status: 'idle',
  total: null
};

const reviewsAPI = new ReviewsAPI();

export const getReviewsThunk = createAsyncThunk(
  'reviews/getReviews',
  (params?: GetReviewsParamsType) => {
    return reviewsAPI.getReviews(params);
  }
);

/**
 * A slice of the reviews and their asynchronous operations
 */
export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviewsThunk.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(getReviewsThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getReviewsThunk.fulfilled, (state, action) => {
        state.status = 'idle';
        state.reviews = action.payload.value.map(review => ({ ...review, id: nanoid() }));
        // The backend does not return the total if I do not use pagination
        state.total = action.payload.total !== 0 ? action.payload.total : action.payload.value.length;
      });
  },
});

export const selectReviews = (state: RootState) => state.reviews.reviews;
export const selectTotal = (state: RootState) => state.reviews.total;
export const selectStatus = (state: RootState) => state.reviews.status;

export default reviewsSlice.reducer;
