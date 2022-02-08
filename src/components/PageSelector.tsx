import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { goToPage, selectReviewsFilters } from "../slices/reviewsFiltersSlice";
import { selectLastPage } from "../slices/reviewsSlice";
import { countTo } from "../utils/countTo";

export const PageSelector: FC = () => {
    const lastPage = useAppSelector(selectLastPage);
    const filters = useAppSelector(selectReviewsFilters);
    const dispatch = useAppDispatch();

    const handleChange = (_event: React.MouseEvent<HTMLElement, MouseEvent>, pageNumber: number) => {
        // TODO: scroll to top?
        dispatch(goToPage(pageNumber))
    }

    return (
        <ToggleButtonGroup
            color="primary"
            value={filters._page}
            exclusive
            onChange={handleChange}
        >
            {countTo(1, lastPage ?? 1, 1).map(pageNumber => <ToggleButton key={pageNumber} value={pageNumber}>{pageNumber}</ToggleButton>)}
        </ToggleButtonGroup>
    )
}