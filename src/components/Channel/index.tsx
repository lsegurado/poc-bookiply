import { memo } from "react";
import { ChannelType } from "../../types";
import { channelImages } from "../../constants/channelImages";

export type ChannelProps = {
    channelName: ChannelType,
} & JSX.IntrinsicElements['img']

/**
 * A component that displays the image corresponding to the channel of a review
 */
export const Channel = memo<ChannelProps>(({ channelName, ...props }) => {

    return (
        <img {...props} src={channelImages[channelName]} alt={channelName} />
    )
})