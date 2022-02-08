import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { GetReviewsParamsType } from '../types';

const initialState: GetReviewsParamsType = {
  _page: 1,
  _limit: 5,
  score: [],
  channel: []
  // channel: []
};

export const reviewsFiltersSlice = createSlice({
  name: 'reviewsFilters',
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
  }
});

export const selectReviewsFilters = (state: RootState) => state.reviewsFilter;

export default reviewsFiltersSlice.reducer;
