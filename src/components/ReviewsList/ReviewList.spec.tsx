import { render, RenderResult } from "@testing-library/react";
import { ReviewsList } from ".";
import { failedState, idleWithNoResultsState, loadingState, mockState } from "../../__fixtures__/state";
import noResultsFound from '../../assets/no-results-found.png';

describe('Reviews list component', () => {
    describe('when having > 0 reviews', () => {
        it(`should render ${mockState().reviews.total} reviews`, () => {
            expect(render(<ReviewsList />).queryAllByRole('article').length).toEqual(mockState().reviews.total);
        })
    })
    describe('when request failed', () => {
        beforeEach(() => {
            mockState.mockReturnValue(failedState);
        })
        it(`should render "An error occurred please try again later." message`, () => {
            expect(render(<ReviewsList />).getByText('An error occurred please try again later.')).toBeDefined();
        })
    })
    describe('when having 0 reviews', () => {
        let el: RenderResult;
        beforeEach(() => {
            mockState.mockReturnValue(idleWithNoResultsState);
            el = render(<ReviewsList />);
        })
        it(`should render "No results were found with the selected filters." message`, () => {
            expect(el.getByText('No results were found with the selected filters.')).toBeDefined();
        })
        it(`should render a "no results found" image`, () => {
            expect(el.getByRole('img').getAttribute('src')).toEqual(noResultsFound);
        })
    })
    describe('when loading', () => {
        beforeEach(() => {
            mockState.mockReturnValue(loadingState);
        })
        it(`should render a loading spinner`, () => {
            expect(render(<ReviewsList />).getByRole('progressbar')).toBeDefined();
        })
    })
    afterEach(mockState.mockReset)
});