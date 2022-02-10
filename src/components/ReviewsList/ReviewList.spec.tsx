import { render, RenderResult } from "@testing-library/react";
import { ReviewsList } from ".";
import { mockState } from "../../__fixtures__/state";

describe('Reviews list component', () => {
    let el: RenderResult;
    beforeEach(() => {
        el = render(<ReviewsList />);
    })
    it(`should render ${mockState.reviews.total} reviews`, () => {
        expect(el.queryAllByRole('article').length).toEqual(mockState.reviews.total);
    })
});