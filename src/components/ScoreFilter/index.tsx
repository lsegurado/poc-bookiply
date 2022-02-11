import styled from "@emotion/styled";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Radio, Rating } from "@mui/material";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectReviewsFilters, selectScore } from "../../slices/reviewsFiltersSlice";
import { countTo } from "../../utils/countTo";
import { filterOptionsByScore } from "../../constants/filterOptionsByScore";

const { availableScoringFilters, maximumScore, filterAccuracy, starsPrecision } = filterOptionsByScore;

const StarsText = styled.span({
    fontWeight: 400,
    fontSize: '1rem',
    color: 'var(--secondary-color)'
})
const StyledRating = styled(Rating)({
    verticalAlign: 'bottom'
})

const sharedStyles = {
    paddingLeft: '30px',
    paddingRight: '30px',
    margin: '0 -24px',
}
const StyledListItemButton = styled(ListItemButton)(sharedStyles)
const StyledListSubheader = styled(ListSubheader)(sharedStyles)

export const ScoreFilter: FC = () => {
    const filters = useAppSelector(selectReviewsFilters);
    const dispatch = useAppDispatch();

    const handleChange = (value: number) => {
        dispatch(
            selectScore(
                countTo(value, maximumScore, filterAccuracy)
            )
        )
    }

    return (
        <List
            sx={{ width: '100%' }}
            disablePadding
            subheader={<StyledListSubheader>Score</StyledListSubheader>}
        >
            {availableScoringFilters.map((score) => {
                const labelId = `label-${score}`
                return (
                    <ListItem
                        key={score}
                        disablePadding
                    >
                        <StyledListItemButton onClick={() => handleChange(score)}>
                            <ListItemIcon>
                                <Radio
                                    edge="start"
                                    checked={score === filters.score?.[0]}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId}
                                primary={
                                    <StarsText>
                                        {score.toFixed(1)} <StyledRating defaultValue={score} max={maximumScore} precision={starsPrecision} readOnly /> and more
                                    </StarsText>
                                }
                            />
                        </StyledListItemButton>
                    </ListItem>
                );
            })}
        </List>
    )
}