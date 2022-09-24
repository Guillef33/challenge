import React, { useState } from "react";
import ShowPop from "./ShowPop";

import "../../App.css";

function UserCard({ user }) {
  const [showPopUp, setShowPopUp] = useState(false);

  const showPop = () => {
    setShowPopUp(true);
  };

  return (
    <div className="user-card">
      <img src={user.picture.large} alt="profile" />
      <h2>{user.name.first}</h2>
      <p>{user.email}</p>
      <p>{user.location.country}</p>

      <p>{user.location.city}</p>
      <p>
        {user.location.street.name} {user.location.street.number} {}
      </p>

      <button onClick={showPop} name="popUp-button">
        Ver perfil
      </button>

      {showPopUp ? <ShowPop user={user} /> : null}
    </div>
  );
}

export default UserCard;
