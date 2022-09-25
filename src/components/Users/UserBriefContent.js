import React from "react";

import { Typography } from "@mui/material";


function UserBriefContent( { user }) {
  return (
    <>
      <Typography gutterBottom variant="h5" component="div">
        {user.name.first} {user.name.last}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Email: {user.email}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Country: {user.location.country}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        City: {user.location.city}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Address {user.location.street.name} {user.location.street.number}
      </Typography>
    </>
  );
}

export default UserBriefContent;
