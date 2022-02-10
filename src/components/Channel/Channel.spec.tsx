import { render } from "@testing-library/react";
import { Channel } from ".";
import { channelImages } from "../../constants/channelImages";
import { ChannelType } from "../../types";

describe('Channel component', () => {
    Object.entries(channelImages).forEach(([channel, imageURL]) => {
        it(`should render ${channel} channel image`, () => {
            const { getByRole } = render(<Channel channelName={channel as ChannelType} />);
            expect(getByRole('img').getAttribute('src')).toEqual(imageURL);
        })
    });
});