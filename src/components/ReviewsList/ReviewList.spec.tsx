import { render } from "@testing-library/react";
import { ReviewsList } from ".";
import { failedState, idleWithNoResultsState, loadingState, mockState } from "../../__fixtures__/state";

describe('Reviews list component', () => {
    describe('when having > 0 reviews', () => {
        it(`should render ${mockState().reviews.total} reviews`, () => {
            expect(render(<ReviewsList />).queryAllByRole('article').length).toEqual(mockState().reviews.total);
        })
    })
    describe('when request failed', () => {
        beforeAll(() => {
            mockState.mockReturnValue(failedState);
        })
        it(`should render "An error occurred please try again later." message`, () => {
            expect(render(<ReviewsList />).getByText('An error occurred please try again later.')).toBeDefined();
        })
    })
    describe('when having 0 reviews', () => {
        beforeAll(() => {
            mockState.mockReturnValue(idleWithNoResultsState);
        })
        it(`should render "No results were found with the selected filters." message`, () => {
            expect(render(<ReviewsList />).getByText('No results were found with the selected filters.')).toBeDefined();
        })
    })
    describe('when loading', () => {
        beforeAll(() => {
            mockState.mockReturnValue(loadingState);
        })
        it(`should render a loading spinner`, () => {
            expect(render(<ReviewsList />).getByRole('progressbar')).toBeDefined();
        })
    })
    afterEach(mockState.mockReset)
});