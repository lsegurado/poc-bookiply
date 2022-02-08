import { FC } from "react";
import { ChannelType } from "../types";
import AIRBNB from '../assets/AIRBNB.svg';
import BOOKINGCOM from '../assets/BOOKINGCOM.svg';
import HOLIDU from '../assets/HOLIDU.svg';

export type ChannelProps = {
    // TODO: Change this
    channelName: ChannelType,
}

const channelImg = {
    AIRBNB,
    BOOKINGCOM,
    HOLIDU
}

export const Channel: FC<ChannelProps> = ({ channelName }) => {

    return (
        <img src={channelImg[channelName]} alt={channelName} />
    )
}