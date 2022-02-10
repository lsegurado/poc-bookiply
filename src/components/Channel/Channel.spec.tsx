import { render, RenderResult } from "@testing-library/react";
import { Channel } from ".";
import { channelImages } from "../../constants/channelImages";
import { ChannelType } from "../../types";

describe('Channel component', () => {
    Object.entries(channelImages).forEach(([channel, imageURL]) => {
        describe(`${channel} channel image`, () => {
            let el: RenderResult;
            beforeEach(() => {
                el = render(<Channel channelName={channel as ChannelType} />);
            })
            it('should match snapshot', () => {
                expect(el).toMatchSnapshot();
            })
            it(`should render ${channel} channel image`, () => {
                expect(el.getByRole('img').getAttribute('src')).toEqual(imageURL);
            })
        })
    });
});