import React, { useState, useEffect } from "react";
import UserProvider, { UserContext } from "./context/UserContext";
import AppRouter from "./router/AppRouter";


function App() {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
}

export default App;
