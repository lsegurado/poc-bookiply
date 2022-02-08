import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import reviewsReducer from '../slices/reviewsSlice';
import reviewsFilterReducer from '../slices/reviewsFiltersSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    reviews: reviewsReducer,
    reviewsFilter: reviewsFilterReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
