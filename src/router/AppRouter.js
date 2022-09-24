import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Banderas from "../components/CustomCall/Banderas";

import Home from "../pages/Home";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom" element={<Banderas />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
