import { render, RenderResult } from "@testing-library/react";
import { ReviewsNumber } from ".";
import { mockState } from "../../__fixtures__/state";

describe('Reviews number component', () => {
    let el: RenderResult;
    beforeEach(() => {
        el = render(<ReviewsNumber />);
    })
    it(`should match snapshot`, () => {
        expect(el).toMatchSnapshot();
    })
    it(`should render the correct amount of reviews`, () => {
        expect(el.getByText(`${mockState().reviews.total} Reviews`)).toBeDefined();
    })
});