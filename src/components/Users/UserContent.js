import React from "react";

import { Typography } from "@mui/material";
import UserBriefContent from "./UserBriefContent";

function UserContent({ user, showPopUp }) {

  return (
    <>
      {showPopUp ? (
        <>
          <UserBriefContent user={user} />
          <Typography variant="body2" color="text.secondary">
            Age: {user.dob.age}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone: {user.phone}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Username: @{user.login.username}
          </Typography>
        </>
      ) : (
        <>
          <UserBriefContent user={user} />
        </>
      )}
    </>
  );
}

export default UserContent;
