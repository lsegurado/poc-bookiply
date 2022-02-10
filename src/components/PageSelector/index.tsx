import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { goToPage, selectReviewsFilters, selectPageSize } from "../../slices/reviewsFiltersSlice";
import { selectTotal } from "../../slices/reviewsSlice";
import { countTo } from "../../utils/countTo";

export const PageSelector: FC = () => {
    const total = useAppSelector(selectTotal);
    const pageSize = useAppSelector(selectPageSize);
    const filters = useAppSelector(selectReviewsFilters);
    const dispatch = useAppDispatch();

    const lastPage = total && pageSize ? Math.ceil(total / pageSize) : 1;

    const handleChange = (_event: React.MouseEvent<HTMLElement, MouseEvent>, pageNumber: number) => {
        if (pageNumber)
            dispatch(goToPage(pageNumber))
    }

    return (
        <ToggleButtonGroup
            color="primary"
            value={filters._page}
            exclusive
            onChange={handleChange}
        >
            {countTo(1, lastPage, 1).map(pageNumber => <ToggleButton key={pageNumber} value={pageNumber}>{pageNumber}</ToggleButton>)}
        </ToggleButtonGroup>
    )
}