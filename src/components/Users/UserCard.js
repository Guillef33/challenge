import React, { useState } from "react";
import ShowPop from "./ShowPop";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import "../../App.css";

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
        <Typography gutterBottom variant="h5" component="div">
          {user.name.first}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.location.country}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.location.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.location.street.name} {user.location.street.number}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          // onClick={showPop}
          onClick={showPop}
          name="popUp-button"
          size="small"
        >See Profile
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
