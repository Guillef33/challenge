import React from "react";

function HeaderList({ filteredResults }) {
  const quantity = filteredResults.length;

  return (
    <>
      <p name="quantity">
        Muchas gracias, su busqueda ha arrogado {quantity}{" "}
        {quantity <= 1 ? "resultado" : "resultados"}
      </p>
    </>
  );
}

export default HeaderList;
