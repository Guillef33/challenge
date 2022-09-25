import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import AdvancedSearch from "../components/AdvancedSearch/AdvancedSearch";

import Home from "../pages/Home";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advanced-search" element={<AdvancedSearch />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
