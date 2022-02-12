import { Button, ButtonProps } from "@mui/material";
import { FC, MouseEvent } from "react";
import { useAppDispatch } from "../../app/hooks";
import { resetFilters } from "../../slices/reviewsFiltersSlice";

/**A button that resets the filters */
export const ResetFiltersButton: FC<ButtonProps> = (props) => {
    const dispatch = useAppDispatch();

    const handleResetFilters = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch(resetFilters());
        props.onClick?.(e);
    }

    return <Button {...props} onClick={handleResetFilters}/>
}