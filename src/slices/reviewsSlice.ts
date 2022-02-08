import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ReviewsAPI } from '../apis/ReviewsAPI';
import { RootState } from '../app/store';
import { GetReviewsParamsType, ReviewType } from '../types';

export interface ReviewsState {
  reviews: ReviewType[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ReviewsState = {
  reviews: [],
  status: 'idle',
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
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReviewsThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getReviewsThunk.fulfilled, (state, action) => {
        state.status = 'idle';
        state.reviews = action.payload;
      });
  },
});

export const selectReviews = (state: RootState) => state.reviews.reviews;

// export const selectCount = (state: RootState) => state.counter.value;

// export const incrementIfOdd = (amount: number): AppThunk => (
//   dispatch,
//   getState
// ) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default reviewsSlice.reducer;
