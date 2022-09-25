import React, { useContext } from "react";

import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

import UserList from "../components/List/UserList";
import Header from "../components/Header/Header";


import { Box, Container, TextField, Button } from "@mui/material";

function Home() {
  const {
     searchItems,
    users,
    setUsers,
    filteredResults,
    showResults,
  } = useContext(UserContext);

  return (
    <Container>
      <Header
        title="Discover the best poker players"
        description="From all over the World. You can contact them now"
      />
      <Box
        style={{
          marginTop: "150px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          onChange={(e) => searchItems(e.target.value)}
          name="searchBox"
        />{" "}
        <Button component={Link} variant="contained" to="/advanced-search">
          Advanced Search
        </Button>
      </Box>
      <Box>
        <UserList
          users={users}
          setUsers={setUsers}
          filteredResults={filteredResults}
          showResults={showResults}
        />
      </Box>
    </Container>
  );
}

export default Home;
