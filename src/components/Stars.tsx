import { FC } from "react";
import styled from '@emotion/styled'

const Star = styled.span({
    fontFamily: 'u2800'
})

export const Stars: FC<{ number: number }> = ({ number }) => {
    let text = '';
    while (text.length !== 5) {
        if (number >= 1)
            text += '★'
        else if (number > 0) {
            text += '⯨'
        } else
            text += '☆'
        number--;
    }

    return (
        <Star>
            {text}
        </Star>
    )
}