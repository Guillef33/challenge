import React from "react";

import { Link } from "react-router-dom";

function HeaderList({ filteredResults }) {
  const quantity = filteredResults.length;

  return (
    <>
      <p name="quantity">
        Muchas gracias, su busqueda ha arrogado {quantity}{" "}
        {quantity <= 1 ? "resultado" : "resultados"}
      </p>
      <Link to="/custom">Hacer tu propia busqueda</Link>
    </>
  );
}

export default HeaderList;
