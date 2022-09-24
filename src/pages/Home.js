import React, { useContext } from "react";
import "../App.css";
import RandomUserList from "../components/RandomUserList";
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
    showResults,
  } = useContext(UserContext);

  return (
    <div>
      <h1>Los mejores jugadores de poker del mundo</h1>
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
