import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { FC, useState } from "react";
import { ChannelFilter } from "../ChannelFilter";
import { ScoreFilter } from "../ScoreFilter";
import styles from './filters.module.css'

export const Filters: FC = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    return (
        <form>
            <Button variant="outlined" onClick={handleOpen}>
                Filters
            </Button>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>Filters</DialogTitle>
                <DialogContent>
                    <ChannelFilter className={styles.channelFilter} />
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