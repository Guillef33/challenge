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

  // Advanced Search
  const [cantidad, setCantidad] = useState(0);
  const [errorCantidad, setErrorCantidad] = useState(false);
  const [pais, setPais] = useState("dk");
  const [searchResults, setSearchResults] = useState([]);
  const [showCustom, setShowCustom] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=21")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.results);
        // Agregar una propiedad jugadores de poker en el objeto
        //   const pokerUsers = Object.entries(json.results).map((item) => {
        //     item[1].pokerLevel = "advanced";

        //     return item;
        //   });
        //   console.log(pokerUsers);
        //   setUsers(pokerUsers);
      });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
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

  const handleChange = (e) => {
    setPais(e.target.value);
  };

  const getCustomRequest = (event) => {
    event.preventDefault();
    fetch(`https://randomuser.me/api/?results=${cantidad}&nat=${pais}`)
      .then((res) => res.json())
      .then((json) => setSearchResults(json.results))
      .catch((error) => {
        console.log("Error", error);
      });
    setShowCustom(!showCustom);
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
        handleChange,
        getCustomRequest,
        pais, 
        setCantidad,
        searchResults,
        errorCantidad
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
