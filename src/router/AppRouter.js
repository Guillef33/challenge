import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";

import Home from "../pages/Home";
import UserDetail from "../components/UserDetail";

function AppRouter() {
  return (
    <Router>
      {/* <Newnav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user-detail/:id" element={<UserDetail />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default AppRouter;
