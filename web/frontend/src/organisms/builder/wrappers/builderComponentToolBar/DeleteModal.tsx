import { memo } from "react";

import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Button } from "@/atoms/button";
import Grid from "@mui/system/Unstable_Grid/Grid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "5px",
  boxShadow: 24,
  textAlign: "center",
  p: 4,
};

interface Props {
  open: boolean;
  onClose: () => void;
  onApprove: () => void;
}

export const DeleteModal = memo(({ open, onClose, onApprove }: Props) => {
  // console.log("rendering");
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Are you sure you want to delete this?
        </Typography>
        {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}> */}
        <Grid container justifyContent={"center"} sx={{ mt: 2 }} spacing={2}>
          <Grid xs={4}>
            <Button.Primary onClick={onApprove}>Yes</Button.Primary>
          </Grid>
          <Grid xs={4}>
            <Button.Secondary onClick={onClose} fullWidth>
              No
            </Button.Secondary>
          </Grid>
        </Grid>
        {/* </Typography> */}
      </Box>
    </Modal>
  );
});
