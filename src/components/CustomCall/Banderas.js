import React, { useState } from "react";

import UserCard from "../Users/UserCard";
import { Link } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

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
      <Typography>How many players and from which country?</Typography>
      <Box
        onSubmit={getCustomRequest}
        component="form"
        noValidate
        sx={{ mt: 1 }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
          <Select
            id="custom-call-country-select"
            label="Country"
            value={pais}
            onChange={handleChange}
          >
            <MenuItem value="dk">Dinamarca</MenuItem>
            <MenuItem value="gb">Inglaterra</MenuItem>
            <MenuItem value="fr">Francia</MenuItem>
            <MenuItem value="es">Espana</MenuItem>
            <MenuItem value="br">Brasil</MenuItem>
            <MenuItem value="mx">Mexico</MenuItem>
          </Select>
        </FormControl>
        <TextField
          margin="normal"
          required
          fullWidth
          id="quantity"
          label="How many do you want?"
          name="quantity"
          autoComplete="quantity"
          autoFocus
          onChange={(e) => setCantidad(e.target.value)}
          type="number"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          See custom request
        </Button>
        <Button variant="outlined" component={Link} to="/">Back to home</Button>
      </Box>

      <Box className="cards-container">
        {customCall.length !== 0
          ? customCall.map((user) => {
              return <UserCard user={user} key={user.id} />;
            })
          : null}
      </Box>
    </Container>
  );
}

export default Banderas;
