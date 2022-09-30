import { memo } from "react";

import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { BuilderButton } from "../../../atoms";
import Grid from "@mui/system/Unstable_Grid/Grid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const DeleteModal = memo(({ open, onClose, onApprove }) => {
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
          Are you sure to delete this component?
        </Typography>
        {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}> */}
        <Grid container justifyContent={"center"} sx={{ mt: 2 }} spacing={2}>
          <Grid item>
            <BuilderButton onClick={onApprove} sx={{ width: "auto" }}>
              Yes
            </BuilderButton>
          </Grid>
          <Grid item>
            <BuilderButton onClick={onClose} sx={{ width: "auto" }}>
              No
            </BuilderButton>
          </Grid>
        </Grid>
        {/* </Typography> */}
      </Box>
    </Modal>
  );
});
