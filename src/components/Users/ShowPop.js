import React from "react";

function ShowPop({ user }) {
  return (
    <div>
      <h1>{user.name.first}</h1>
    </div>
  );
}

export default ShowPop;
