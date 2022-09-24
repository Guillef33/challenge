import { Typography } from "@mui/material";
import React from "react";

function HeaderList({ filteredResults }) {
  const quantity = filteredResults.length;

  return (
    <>
      <Typography name="quantity" marginTop={4}>
        Great! We find {quantity} {quantity <= 1 ? "profile" : "profiles"}
      </Typography>
    </>
  );
}

export default HeaderList;
