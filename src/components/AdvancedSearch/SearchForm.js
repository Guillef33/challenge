import React from "react";

import { Link } from "react-router-dom";

import {
  Box,
  Button,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

function SearchForm({
  selectCountry,
  getCustomRequest,
  country,
  errorQuantity,
  setQuantity,
}) {
  return (
    <Box onSubmit={getCustomRequest} component="form" noValidate sx={{ mt: 1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
        <Select
          id="custom-call-country-select"
          label="Country"
          value={country}
          onChange={selectCountry}
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
        error={errorQuantity}
        required
        fullWidth
        id="quantity"
        label="How many do you want?"
        name="quantity"
        autoComplete="quantity"
        autoFocus
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
        type="number"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        See custom request
      </Button>
      <Button variant="outlined" component={Link} to="/">
        Back to home
      </Button>
    </Box>
  );
}

export default SearchForm;
