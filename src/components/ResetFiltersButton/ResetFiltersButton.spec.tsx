import { render, RenderResult } from "@testing-library/react";
import { ResetFiltersButton } from ".";
import { useAppDispatch } from "../../app/hooks";
import { resetFilters } from "../../slices/reviewsFiltersSlice";

describe('Reset filters button component', () => {
    let el: RenderResult;
    beforeEach(() => {
        el = render(<ResetFiltersButton />);
    })
    it(`when clicking the button should dispatch a resetFilters event`, () => {
        el.getByRole('button').click()
        const dispatch = useAppDispatch();
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toBeCalledWith(resetFilters());
    })
    afterEach(useAppDispatch().mockReset)
});