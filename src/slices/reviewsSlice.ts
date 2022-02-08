import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ReviewsAPI } from '../apis/ReviewsAPI';
import { RootState } from '../app/store';
import { GetReviewsParamsType, ReviewType } from '../types';

export interface ReviewsState {
  reviews: ReviewType[];
  status: 'idle' | 'loading' | 'failed';
  lastPage: number | null,
  total: number | null
}

const initialState: ReviewsState = {
  reviews: [],
  status: 'idle',
  lastPage: null,
  total: null
};

const reviewsAPI = new ReviewsAPI();

export const getReviewsThunk = createAsyncThunk(
  'reviews/getReviews',
  (params?: GetReviewsParamsType) => {
    return reviewsAPI.getReviews(params);
  }
);

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviewsThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getReviewsThunk.fulfilled, (state, action) => {
        state.status = 'idle';
        state.reviews = action.payload.value;
        state.lastPage = action.payload.lastPage;
        state.total = action.payload.total;
      });
  },
});

export const selectReviews = (state: RootState) => state.reviews.reviews;
export const selectLastPage = (state: RootState) => state.reviews.lastPage;
export const selectTotal = (state: RootState) => state.reviews.total;

export default reviewsSlice.reducer;
