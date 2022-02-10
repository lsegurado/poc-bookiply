import { render, RenderResult } from "@testing-library/react";
import { PageSelector } from ".";
import { useAppDispatch } from "../../app/hooks";
import { goToPage } from "../../slices/reviewsFiltersSlice";
import { countTo } from "../../utils/countTo";
import { mockState } from "../../__fixtures__/state";

describe('Page selector component', () => {
    let el: RenderResult;
    beforeEach(() => {
        el = render(<PageSelector />);
    })
    countTo(1, 8, 1).forEach(page => {
        const matcher = page.toString();
        if (page === mockState.reviewsFilter._page)
            it('when clicking the current page button should not dispatch a goToPage event', () => {
                const dispatch = useAppDispatch();
                el.getByText(matcher).click();
                expect(dispatch).toHaveBeenCalledTimes(0);
            })
        else
            it('when clicking each page button should dispatch a goToPage event', () => {
                const dispatch = useAppDispatch();
                el.getByText(matcher).click();
                expect(dispatch).toHaveBeenCalledTimes(1);
                expect(dispatch).toBeCalledWith(goToPage(page))
            })
    })
});