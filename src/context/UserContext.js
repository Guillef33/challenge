import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext(null);

const UserProvider = (props) => {
  //   const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [showResults, setshowResults] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=9")
      .then((res) => res.json())
      .then((json) => setUsers(json.results));
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 3000);
  }, []);

  //   console.log(englishUsers);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = users.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
      setShowUsers(false);
      setshowResults(true);
    } else {
      setFilteredResults(users);
    }
  };
  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        searchItems,
        showUsers,
        setShowUsers,
        showResults,
        filteredResults
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
