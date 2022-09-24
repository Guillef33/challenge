import React from "react";
import UserCard from "../Users/UserCard";

import "../../App.css";
import HeaderList from "./HeaderList";

function RandomUserList({ users, filteredResults, showResults }) {
  return (
    <>
      {showResults ? (
        <>
          <HeaderList
            filteredResults={filteredResults}
         
          />
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
