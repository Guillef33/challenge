import React, { useContext } from "react";
import "../App.css";
import RandomUserList from "../components/List/RandomUserList";
import { UserContext } from "../context/UserContext";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

import { Box, Container, TextField, Button } from "@mui/material";

function Home() {
  const {
    // showUsers,
    // setShowUsers,
    searchItems,
    users,
    setUsers,
    filteredResults,
    showResults,
  } = useContext(UserContext);

  return (
    <Container>
      <Header
        title="Conoce los mejores jugadores del mundo"
        description="Busca y recluta ahora"
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
        {/* <Box className="button-wrapper"> */}
        <Button component={Link} variant="contained" to="/custom">
          Busqueda avanzada
        </Button>
        {/* </Box> */}
      </Box>
      <Box>
        <RandomUserList
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
