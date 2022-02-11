import { render, within, RenderResult, fireEvent } from "@testing-library/react";
import { ChannelFilter } from ".";
import { useAppDispatch } from "../../app/hooks";
import { channels } from "../../constants/channels";
import { selectChannel } from "../../slices/reviewsFiltersSlice";

describe('Channel filter component', () => {
    let el: RenderResult;
    beforeEach(() => {
        el = render(<ChannelFilter />);
    })
    channels.forEach(channel => {
        it(`when clicking the ${channel} channel button should dispatch a selectChannel event`, async () => {
            // material-ui's select component uses the mouseDown event to trigger the popover menu to appear.
            fireEvent.mouseDown(el.getByRole('button'));
            const listbox = within(el.getByRole('listbox'));
            listbox.getByAltText(channel).click();
            const dispatch = useAppDispatch();
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(dispatch).toBeCalledWith(selectChannel([channel]));
        })
    })
    afterEach(useAppDispatch().mockReset)
});