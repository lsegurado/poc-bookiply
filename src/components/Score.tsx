import { FC } from "react"

export const Score: FC = ({ children }) => {

    return (
        <span>{children} / 5</span>
    )
}