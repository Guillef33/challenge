import React, { useState } from "react";

import UserCard from "../Users/UserCard";
import { Link } from "react-router-dom";
import { Container, Box, Typography } from "@mui/material";

function Banderas() {
  const [cantidad, setCantidad] = useState(0);
  const [pais, setPais] = useState("dk");
  const [customCall, setCustomCall] = useState([]);
  const [showCustom, setShowCustom] = useState(false);

  const handleChange = (e) => {
    setPais(e.target.value);
  };

  const getCustomRequest = (event) => {
    event.preventDefault();
    console.log(cantidad, pais);
    fetch(`https://randomuser.me/api/?results=${cantidad}&nat=${pais}`)
      .then((res) => res.json())
      .then((json) => setCustomCall(json.results))
      .catch((error) => {
        console.log("Error", error);
      });
    setShowCustom(!showCustom);
  };

  return (
    <Container>
      <Box>
        <Typography>How many players and from which country?</Typography>
        <form onSubmit={getCustomRequest}>
          <select value={pais} onChange={handleChange}>
            <option value="dk">Alemania</option>
            <option value="gb">Inglaterra</option>
            <option value="fr">Francia</option>
          </select>
          <input onChange={(e) => setCantidad(e.target.value)} type="number" />
          <button type="submit">Ver Custom Call</button>
          <Link to="/">Volver a home</Link>
        </form>
      </Box>
      <Box className="cards-container"></Box>
      {customCall.length !== 0
        ? customCall.map((user) => {
            return <UserCard user={user} key={user.id} />;
          })
        : null}
    </Container>
  );
}

export default Banderas;
