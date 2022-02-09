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
    expect(store.getState().reviews.reviews).toEqual(initialState.reviews);
    expect(store.getState().reviews.total).toEqual(initialState.total);
    expect(store.getState().reviews.status).toEqual('idle');
    store.dispatch(getReviewsThunk());
    expect(store.getState().reviews.status).toEqual('loading');
    await new Promise(process.nextTick);
    expect(store.getState().reviews.reviews).toEqual(mockGetReviewsResponse.value);
    expect(store.getState().reviews.total).toEqual(mockGetReviewsResponse.total);
    expect(store.getState().reviews.status).toEqual('idle');
  });
});
