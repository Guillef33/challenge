import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext(null);

const UserProvider = (props) => {
  // The Users Object
  const [users, setUsers] = useState([]);
  // For switching show and hide, maybe it can be deleted
  const [showUsers, setShowUsers] = useState(false);
  // To store the query of quantity in the Flags component
  const [searchInput, setSearchInput] = useState("");
  // To store the result of the users when it has a filter by name
  const [filteredResults, setFilteredResults] = useState([]);
  // For switching show and hide, maybe it can be deleted
  const [showResults, setshowResults] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=9")
      .then((res) => res.json())
      .then((json) => setUsers(json.results));
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    console.log(searchInput);
    if (searchInput !== "") {
      const filteredData = users.filter((user) =>
        user.name.first
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase())
      );
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
        filteredResults,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
