import reviewsReducer, {
  getReviewsThunk,
  initialState
} from './reviewsSlice';
import { mockGetReviewsResponse } from '../__fixtures__/getReviewsResponse';
import { store } from '../app/store';

describe('reviews reducer', () => {
  it('should handle initial state', () => {
    expect(reviewsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle get reviews', async () => {
    expect(store.getState().reviews).toEqual(initialState);
    store.dispatch(getReviewsThunk());
    expect(store.getState().reviews).toEqual({
      ...initialState,
      status: 'loading'
    });
    await new Promise(process.nextTick);
    expect(store.getState().reviews).toEqual({
      reviews: mockGetReviewsResponse.value,
      total: mockGetReviewsResponse.total,
      status: 'idle'
    });
  });
});
