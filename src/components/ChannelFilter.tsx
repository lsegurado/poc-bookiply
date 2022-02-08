import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from "@mui/material";
import { CommonProps } from "@mui/material/OverridableComponent";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectChannel, selectReviewsFilters } from "../slices/reviewsFiltersSlice";
import { ChannelType } from "../types";

const channels: ChannelType[] = ['AIRBNB', 'BOOKINGCOM', 'HOLIDU']

export const ChannelFilter: FC<CommonProps> = (props) => {
    const filters = useAppSelector(selectReviewsFilters);
    const dispatch = useAppDispatch();

    const handleChange = ({ target: { value } }: SelectChangeEvent<ChannelType[]>) => {
        dispatch(
            selectChannel(
                // On autofill we get a stringified value.
                typeof value === 'string' ? value.split(',') as ChannelType[] : value
            )
        )
    }

    return (
        <FormControl {...props}>
            <InputLabel id="channel-label">Channel</InputLabel>
            <Select
                labelId="channel-label"
                multiple
                value={filters.channel}
                onChange={handleChange}
                input={<OutlinedInput label="channel" />}
            >
                {channels.map((name) => (
                    <MenuItem
                        key={name}
                        value={name}
                    >
                        {/* TODO: Change */}
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}