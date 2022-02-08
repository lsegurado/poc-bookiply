import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Rating } from "@mui/material";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectReviewsFilters, selectScore } from "../slices/reviewsFiltersSlice";
import { Stars } from "./Stars";
import { countTo } from "../utils/countTo";

const scores = [4.5, 4.0, 3.5, 3.0]

export const ScoreFilter: FC = () => {
    const filters = useAppSelector(selectReviewsFilters);
    const dispatch = useAppDispatch();

    const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
            selectScore(
                countTo(Number(value), 5, 0.1)
            )
        )
    }

    return (
        <FormControl>
            <FormLabel id="score-label">Score</FormLabel>
            <RadioGroup
                aria-labelledby="score-label"
                name="score-group"
                value={filters.score?.[0] ?? null}
                onChange={handleChange}
            >
                {scores.map(score => (
                    <FormControlLabel key={score} value={score} control={<Radio />} label={
                        <>{score.toFixed(1)} <Rating name="half-rating-read" defaultValue={score} precision={0.5} readOnly /> and more</>
                    } />
                ))}
            </RadioGroup>
        </FormControl>
    )
}