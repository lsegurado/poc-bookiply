import { render, RenderResult } from "@testing-library/react";
import { ScoreFilter } from ".";
import { useAppDispatch } from "../../app/hooks";
import { filterOptionsByScore } from "../../constants/filterOptionsByScore";
import { selectScore } from "../../slices/reviewsFiltersSlice";
import { countTo } from "../../utils/countTo";

const { availableScoringFilters, maximumScore, filterAccuracy } = filterOptionsByScore

describe('Score filter component', () => {
    let el: RenderResult;
    beforeEach(() => {
        el = render(<ScoreFilter />);
    })
    availableScoringFilters.forEach(score => {
        it('when clicking each page button should dispatch a selectScore event', () => {
            const matcher = new RegExp(`\\b${score.toFixed(1)}\\b`, 'gi');
            const dispatch = useAppDispatch();
            el.getByText(matcher).click();
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(dispatch).toBeCalledWith(selectScore(countTo(score, maximumScore, filterAccuracy)))
        })
    })
});