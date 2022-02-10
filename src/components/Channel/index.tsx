import { FC } from "react";
import { ChannelType } from "../../types";
import { channelImages } from "../../constants/channelImages";

export type ChannelProps = {
    channelName: ChannelType,
} & JSX.IntrinsicElements['img']

export const Channel: FC<ChannelProps> = ({ channelName, ...props }) => {

    return (
        <img {...props} src={channelImages[channelName]} alt={channelName} />
    )
}