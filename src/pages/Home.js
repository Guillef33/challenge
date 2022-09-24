import React, { useContext } from "react";
import "../App.css";
import RandomUserList from "../components/List/RandomUserList";
import { UserContext } from "../context/UserContext";
import Header from "../components/Header/Header";

function Home() {
  const {
    // showUsers,
    // setShowUsers,
    searchItems,
    users,
    setUsers,
    filteredResults,
    showResults,
  } = useContext(UserContext);

  return (
    <div>
      <Header
        title="Conoce los mejores jugadores del mundo"
        description="Busca y recluta ahora"
      />
      <input
        icon="search"
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
        name="searchBox"
      />
      <>
        <RandomUserList
          users={users}
          setUsers={setUsers}
          filteredResults={filteredResults}
          showResults={showResults}
        />
      </>
    </div>
  );
}

export default Home;
