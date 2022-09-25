import React, { useState } from "react";
import { Modal, Box, Button } from "@mui/material";

import UserContent from "./UserContent";

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
        <UserContent user={user} showPopUp={showPopUp} />
        <Button onClick={handleClose}>Close</Button>
      </Box>
    </Modal>
  );
}

export default ShowPop;
