import React from "react";
import { Modal, Box, Button, Typography } from "@mui/material";

function ShowPop({ user, setShowPopUp, showPopUp }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const handleClose = () => {
    setShowPopUp(false);
  };

  return (
    <Modal
      open={showPopUp}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 300 }}>
        <Typography id="parent-modal-title" variant="h6">
          {user.name.first}
        </Typography>
        <Typography id="parent-modal-description" variant="book">
          {user.location.country}
        </Typography>
        <Button onClick={handleClose}>Close</Button>
      </Box>
    </Modal>
  );
}

export default ShowPop;
