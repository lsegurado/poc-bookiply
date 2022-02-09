import styled from "@emotion/styled"
import { FC } from "react"

const ScoreText = styled.span({
    height: '32px',
    width: '66px',
    borderRadius: '8px',
    backgroundColor: '#0276DB',
    display: 'inline-flex',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '14px'
})

export const Score: FC = ({ children }) => {

    return (
        <ScoreText>{children} / 5</ScoreText>
    )
}