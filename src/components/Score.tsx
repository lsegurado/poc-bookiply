import styled from "@emotion/styled"
import { memo } from "react"
import { filterOptionsByScore } from "../constants/filterOptionsByScore"

const ScoreText = styled.span({
    height: '32px',
    width: '66px',
    borderRadius: '8px',
    backgroundColor: 'var(--primary-background)',
    display: 'inline-flex',
    color: 'var(--primary-color)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '14px'
})

/**A component that displays the score in a review */
export const Score = memo(({ children }) => {

    return (
        <ScoreText>{children} / {filterOptionsByScore.maximumScore}</ScoreText>
    )
})