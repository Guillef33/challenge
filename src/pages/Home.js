import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import RandomUserList from "../components/RandomUserList";
import SearchUser from "../components/SearchUser";
import Banderas from "../components/Banderas";

import { UserContext } from "../context/UserContext";

function Home() {
  const {
    showUsers,
    setShowUsers,
    searchItems,
    users,
    setUsers,
    showResults,
    filteredResults,
  } = useContext(UserContext);

  return (
    <div>
      <h1>List of Users</h1>
      <button onClick={() => setShowUsers(!showUsers)}>
        Get a List of Random Users
      </button>
      <input
        icon="search"
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
      />
      {/* {showUsers ? ( */}
        <>
          <RandomUserList
            users={users}
            setUsers={setUsers}
            showResults={showResults}
            filteredResults={filteredResults}
          />
        </>
      {/* // ) : null} */}
      <Banderas />
    </div>
  );
}

export default Home;
