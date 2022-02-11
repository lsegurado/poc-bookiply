import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { goToPage, selectReviewsFilters, selectPageSize } from "../../slices/reviewsFiltersSlice";
import { selectTotal } from "../../slices/reviewsSlice";
import { countTo } from "../../utils/countTo";

/**
 * A component that allows you to move through the pages of the application
 */
export const Footer: FC<JSX.IntrinsicElements['footer']> = (props) => {
    const total = useAppSelector(selectTotal);
    const pageSize = useAppSelector(selectPageSize);
    const filters = useAppSelector(selectReviewsFilters);
    const dispatch = useAppDispatch();

    if (total === 0) {
        return null
    }

    const lastPage = total && pageSize ? Math.ceil(total / pageSize) : 1;

    const handleChange = (_event: React.MouseEvent<HTMLElement, MouseEvent>, pageNumber: number) => {
        if (pageNumber)
            dispatch(goToPage(pageNumber))
    }

    return (
        <footer {...props}>
            <ToggleButtonGroup
                color="primary"
                value={filters._page}
                exclusive
                size="large"
                onChange={handleChange}
            >
                {countTo(1, lastPage, 1).map(pageNumber => <ToggleButton key={pageNumber} value={pageNumber}>{pageNumber}</ToggleButton>)}
            </ToggleButtonGroup>
        </footer>
    )
}