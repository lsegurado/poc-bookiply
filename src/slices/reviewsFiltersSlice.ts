import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { ChannelType, GetReviewsParamsType } from '../types';

export const initialState: GetReviewsParamsType = {
  _page: 1,
  _limit: 4,
  score: [],
  channel: []
};

/**
 * A slice of the filters used to get reviews from the API
 */
export const reviewsFiltersSlice = createSlice({
  name: 'reviewsFilters',
  initialState,
  reducers: {
    selectChannel: (state, action: PayloadAction<ChannelType[]>) => {
      state._page = 1;
      state.channel = action.payload;
    },
    selectScore: (state, action: PayloadAction<number[]>) => {
      state._page = 1;
      state.score = action.payload;
    },
    goToPage: (state, action: PayloadAction<number>) => {
      state._page = action.payload;
    },
    resetFilters: () => {
      return initialState
    },
  }
});

export const { selectChannel, selectScore, goToPage, resetFilters } = reviewsFiltersSlice.actions;

export const selectReviewsFilters = (state: RootState) => state.reviewsFilter;
export const selectPageSize = (state: RootState) => state.reviewsFilter._limit;

export default reviewsFiltersSlice.reducer;
