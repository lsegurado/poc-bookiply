import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { ChannelType, GetReviewsParamsType } from '../types';

const initialState: GetReviewsParamsType = {
  _page: 1,
  _limit: 4,
  score: [],
  channel: []
};

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
      document.getElementsByTagName('header')[0].scrollIntoView()
    },
  }
});

export const { selectChannel, selectScore, goToPage } = reviewsFiltersSlice.actions;

export const selectReviewsFilters = (state: RootState) => state.reviewsFilter;

export default reviewsFiltersSlice.reducer;
