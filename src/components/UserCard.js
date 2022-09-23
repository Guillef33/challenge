import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "../App.css";

function UserCard({ user }) {
  const { id } = useParams();

  return (
    <div className="user-card">
      <img src={user.picture.large} alt="profile" />
      <p key={user.id}>{user.email}</p>
      <p key={user.id}>{user.nacionality}</p>

      <Link to={`/user-detail/${id}`}>See complete Profile </Link>
    </div>
  );
}

export default UserCard;
