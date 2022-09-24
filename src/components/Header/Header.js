import React from "react";

function Header({ title, description }) {
  return (
    <>
      <h1 className="header">{title}</h1>
      <h3 className="description">{description}</h3>
    </>
  );
}

export default Header;
