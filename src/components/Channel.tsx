import { FC } from "react";
import { ChannelType } from "../types";
import AIRBNB from '../assets/AIRBNB.svg';
import BOOKINGCOM from '../assets/BOOKINGCOM.svg';
import HOLIDU from '../assets/HOLIDU.svg';

export type ChannelProps = {
    channelName: ChannelType,
} & JSX.IntrinsicElements['img']

const channelImg = {
    AIRBNB,
    BOOKINGCOM,
    HOLIDU
}

export const Channel: FC<ChannelProps> = ({ channelName, ...props }) => {

    return (
        <img {...props} src={channelImg[channelName]} alt={channelName} />
    )
}