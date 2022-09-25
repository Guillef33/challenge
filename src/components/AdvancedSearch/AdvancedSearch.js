import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import UserCard from "../Users/UserCard";
import { Container, Box, Typography, Grid } from "@mui/material";
import SearchForm from "./SearchForm";

function AdvancedSearch() {
  const {
    handleChange,
    getCustomRequest,
    pais,
    setCantidad,
    searchResults,
    errorCantidad,
  } = useContext(UserContext);

  return (
    <Container>
      <Typography>How many players and from which country?</Typography>
      <SearchForm
        handleChange={handleChange}
        getCustomRequest={getCustomRequest}
        pais={pais}
        errorCantidad={errorCantidad}
        setCantidad={setCantidad}
      />
      <Grid container spacing={2} marginTop={2}>
        {searchResults.length !== 0
          ? searchResults.map((user, index) => {
              return (
                <Grid item xs={12} sm={4}>
                  <Box component={UserCard} user={user} key={index}></Box>
                </Grid>
              );
            })
          : null}
      </Grid>
    </Container>
  );
}

export default AdvancedSearch;
