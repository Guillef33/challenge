import React from "react";
import UserCard from "../Users/UserCard";
import { styled } from "@mui/material/styles";

import "../../App.css";
import HeaderList from "./HeaderList";
import { Grid, Box } from "@mui/material";

function RandomUserList({ users, filteredResults, showResults }) {

  return (
    <>
      {showResults ? (
        <>
          <HeaderList filteredResults={filteredResults} />
          <Grid container spacing={2} marginTop={2}>
            {filteredResults.map((user, index) => {
              return (
                <Grid item xs={12} sm={4}>
                  <Box component={UserCard} user={user} key={index}></Box>
                </Grid>
              );
            })}
          </Grid>
        </>
      ) : (
        <>
          <Grid container spacing={2} marginTop={2}>
            {users.map((user, index) => {
              return (
                <Grid item xs={12} sm={4}>
                  <Box component={UserCard} user={user} key={index}></Box>
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </>
  );
}

export default RandomUserList;
