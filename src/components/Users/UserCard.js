import React, { useState } from "react";
import ShowPop from "./ShowPop";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";

import UserContent from "./UserContent";

import "./Users.css";

function UserCard({ user }) {
  const [showPopUp, setShowPopUp] = useState(false);

  const showPop = () => {
    setShowPopUp(true);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={user.picture.large}
        alt="imagen-de-perfil"
      />
      <CardContent>
        <UserContent user={user} />
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          onClick={showPop}
          name="popUp-button"
          size="small"
        >
          See Profile
        </Button>
      </CardActions>

      {showPopUp ? (
        <ShowPop
          user={user}
          showPopUp={showPopUp}
          setShowPopUp={setShowPopUp}
        />
      ) : null}
    </Card>
  );
}

export default UserCard;
