import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ShowPop from "./ShowPop";

import "../App.css";

function UserCard({ user }) {
  const { id } = useParams();

  const [showPopUp, setShowPopUp] = useState(false);

  const showPop = () => {
    setShowPopUp(true);
  };

  // console.log(user);

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

      <button onClick={showPop}>Ver perfil</button>

      {showPopUp ? <ShowPop user={user} /> : null}
    </div>
  );
}

export default UserCard;
