import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Radio, Rating } from "@mui/material";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectReviewsFilters, selectScore } from "../../slices/reviewsFiltersSlice";
import { countTo } from "../../utils/countTo";
import styles from './scoreFilter.module.css'

const scores = [4.5, 4.0, 3.5, 3.0]

export const ScoreFilter: FC = () => {
    const filters = useAppSelector(selectReviewsFilters);
    const dispatch = useAppDispatch();

    const handleChange = (value: number) => {
        dispatch(
            selectScore(
                countTo(value, 5, 0.1)
            )
        )
    }

    return (
        <List
            sx={{ width: '100%' }}
            disablePadding
            subheader={<ListSubheader className={styles.item}>Score</ListSubheader>}
        >
            {scores.map((score) => {
                const labelId = `label-${score}`
                return (
                    <ListItem
                        key={score}
                        disablePadding
                    >
                        <ListItemButton className={styles.item} onClick={() => handleChange(score)}>
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
                                    <span className={styles.starsText}>
                                        {score.toFixed(1)} <Rating className={styles.rating} defaultValue={score} precision={0.5} readOnly /> and more
                                    </span>
                                }
                            />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    )
}