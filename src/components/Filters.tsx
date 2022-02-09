import { Button, Dialog, DialogActions, DialogContent, DialogTitle, styled } from "@mui/material";
import { FC, useState } from "react";
import { ChannelFilter } from "./ChannelFilter";
import { ScoreFilter } from "./ScoreFilter";

const StyledChannelFilter = styled(ChannelFilter)({
    width: '100%',
    marginTop: '5px'
})

export const Filters: FC = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    return (
        <form>
            <Button variant="outlined" onClick={handleOpen}>
                Filters
            </Button>
            <Dialog fullWidth onClose={handleClose} open={open}>
                <DialogTitle>Filters</DialogTitle>
                <DialogContent>
                    <StyledChannelFilter />
                    <ScoreFilter />
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </form>
    )
}