import React from "react";
import UserCard from "../Users/UserCard";

import "../../App.css";
import { Link } from "react-router-dom";
import HeaderList from "./HeaderList";

function RandomUserList({ users, filteredResults, showResults }) {
  return (
    <>
      {showResults ? (
        <>
          <HeaderList filteredResults={filteredResults} />
          <div className="cards-container">
            {filteredResults.map((user, index) => {
              return (
                <>
                  <UserCard user={user} key={index} />
                </>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <Link to="/custom">Hacer tu propia busqueda</Link>
          <div className="cards-container">
            {users.map((user, index) => {
              return <UserCard user={user} key={index} />;
            })}
          </div>
        </>
      )}
    </>
  );
}

export default RandomUserList;
