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

function AdvancedSearch () {
  const [cantidad, setCantidad] = useState(0);
  const [errorCantidad, setErrorCantidad] = useState(false);
  const [pais, setPais] = useState("dk");
  const [customCall, setCustomCall] = useState([]);
  const [showCustom, setShowCustom] = useState(false);

  const handleChange = (e) => {
    setPais(e.target.value);
  };

  const getCustomRequest = (event) => {
    event.preventDefault();
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
            <MenuItem value="dk">Denmark</MenuItem>
            <MenuItem value="gb">England</MenuItem>
            <MenuItem value="fr">France</MenuItem>
            <MenuItem value="es">Spain</MenuItem>
            <MenuItem value="br">Brazil</MenuItem>
            <MenuItem value="mx">Mejico</MenuItem>
          </Select>
        </FormControl>
        <TextField
          margin="normal"
          error={errorCantidad}
          required
          fullWidth
          id="quantity"
          label="How many do you want?"
          name="quantity"
          autoComplete="quantity"
          autoFocus
          onChange={(e) => {
            setCantidad(e.target.value);
            // if (cantidad.lenght > 3) {
            //   return null
            // }
            // if (cantidad.typeof !== "number") {
            //   setErrorCantidad(true);
            // } else {
            //   setErrorCantidad(false);
            // }
          }}
          type="number"
          // helperText="Debe ingresar un numero"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          See custom request
        </Button>
        <Button variant="outlined" component={Link} to="/">
          Back to home
        </Button>
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

export default AdvancedSearch;
