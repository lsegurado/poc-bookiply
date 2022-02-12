import { Box, CircularProgress } from "@mui/material";
import { FC } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectReviews, selectStatus } from "../../slices/reviewsSlice";
import { Review } from "../Review";
import noResultsFound from '../../assets/no-results-found.png';

/**
 * A component that shows all the reviews of the store
 */
export const ReviewsList: FC = () => {
    const reviews = useAppSelector(selectReviews);
    const status = useAppSelector(selectStatus);

    switch (status) {
        case 'idle':
            if (reviews.length > 0)
                return <>{reviews.map(review => <Review key={review.id} review={review} />)}</>
            else
                return (
                    <Box sx={{ margin: 'auto', textAlign: 'center' }} >
                        <img src={noResultsFound} alt="No results found" />
                        <p>No results were found with the selected filters.</p>
                    </Box>
                )
        case 'loading': return <Box sx={{ margin: 'auto' }} ><CircularProgress size={90} /></Box>
        case 'failed': return <Box sx={{ margin: 'auto' }} ><p>An error occurred please try again later.</p></Box>
    }
}