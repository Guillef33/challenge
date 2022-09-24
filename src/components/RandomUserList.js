import React from "react";
import UserCard from "./UserCard";

import { Link, useParams } from "react-router-dom";

import "../App.css";

function RandomUserList({ users, filteredResults, showResults }) {
  return (
    <div className="cards-container">
      {showResults
        ? filteredResults.map((user, index) => {
            return <UserCard user={user} key={index} />;
          })
        : users.map((user, index) => {
            return <UserCard user={user} key={index} />;
          })}
    </div>
  );
}

export default RandomUserList;
