import { ChannelType } from '../types';
import reviewsFiltersReducer, {
  initialState,
  selectChannel,
  selectScore,
  goToPage,
  resetFilters,
} from './reviewsFiltersSlice';

describe('reviews filter reducer', () => {
  it('should handle initial state', () => {
    expect(reviewsFiltersReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle select channel', () => {
    const expectedValue: ChannelType[] = ['AIRBNB'];
    const actual = reviewsFiltersReducer(initialState, selectChannel(expectedValue));
    expect(actual.channel).toEqual(expectedValue);
  });

  it('should handle select score', () => {
    const expectedValue: number[] = [4, 4.1];
    const actual = reviewsFiltersReducer(initialState, selectScore(expectedValue));
    expect(actual.score).toEqual(expectedValue);
  });

  it('should handle go to page', () => {
    const expectedValue = 2;
    const actual = reviewsFiltersReducer(initialState, goToPage(expectedValue));
    expect(actual._page).toEqual(expectedValue);
  });

  it('should handle reset filters', () => {
    const actual = reviewsFiltersReducer({ score: [1], channel: ['AIRBNB'], _page: 3, _limit: 4 }, resetFilters());
    expect(actual).toEqual(initialState);
  });
});
