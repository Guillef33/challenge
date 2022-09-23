import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import RandomUserList from "../components/RandomUserList";
import SearchUser from "../components/SearchUser";
import Banderas from "../components/Banderas";
import { Button, InputGroup, Form, Container } from "react-bootstrap";

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
    <>
      <Container>
        <h3>List of Users</h3>
        <Button variant="primary" onClick={() => setShowUsers(!showUsers)}>
          Get a List of Random Users
        </Button>
        <InputGroup size="sm" className="mb-3">
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Search..."
            onChange={(e) => searchItems(e.target.value)}
          />
        </InputGroup>

        {showUsers ? (
          <>
            <RandomUserList
              users={users}
              setUsers={setUsers}
              showResults={showResults}
              filteredResults={filteredResults}
            />
          </>
        ) : null}
        <Banderas />
      </Container>
    </>
  );
}

export default Home;
