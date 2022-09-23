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
  // console.log(showResults);
  const { id } = useParams();

  // console.log(filteredList);

  return (
    <div className="cards-container">
      {showResults
        ? filteredResults.map((item) => {
            return <UserCard user={item} />;
          })
        : users.map((user) => {
            return <UserCard user={user} />;
          })}
    </div>
  );
}

export default RandomUserList;
