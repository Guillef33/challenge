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
    filteredResults,
    showResults
  } = useContext(UserContext);

  return (
    <div>
      <h1>List of Users</h1>
      <button onClick={() => setShowUsers(!showUsers)}>
      Selecciona cuantos jugadores de poker profesionales y por pais
      </button>
      <input
        icon="search"
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
      />
      <>
        <RandomUserList
          users={users}
          setUsers={setUsers}
          filteredResults={filteredResults}
          showResults={showResults}
        />
      </>
      <Banderas />
    </div>
  );
}

export default Home;
