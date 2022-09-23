import React from "react";
import UserCard from "./UserCard";

import { Link, useParams } from "react-router-dom";

import "../App.css";

function RandomUserList({
  users,
  filteredList,
  setFilteredList,
  nameUser,
  filteredResults,
  showResults,
}) {
  const { id } = useParams();

  console.log(filteredResults);

  return (
    <div className="cards-container">
      {showResults
        ? filteredResults.map((item) => {
            return <UserCard user={item} key={item.id} />;
          })
        : users.map((user) => {
            return <UserCard user={user} key={user.id} />;
          })}
    </div>
  );
}

export default RandomUserList;
