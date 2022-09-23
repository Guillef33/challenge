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

  return (
    <div className="user-card">
      <img src={user.picture.large} alt="profile" />
      <h2>{user.name.first}</h2>
      <p key={user.id}>{user.email}</p>
      <p key={user.id}>{user.nacionality}</p>

      <Link to={`/user-detail/${id}`} state={{ user }}>
        See complete Profile{" "}
      </Link>

      <button onClick={showPop}>Ver perfil</button>

      {showPopUp ? <ShowPop user={user} /> : null}
    </div>
  );
}

export default UserCard;
