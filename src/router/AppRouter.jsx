import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Specialities from "../pages/Specialities";
import Appointment from "../pages/Appointment";
import PrivateRouter from "../utils/PrivateRouter";
import PublicRouter from "../utils/PublicRouter";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path="/appointment" element={<Appointment />} />
        </Route>

        <Route element={<PublicRouter />}>
          <Route path="/" element={<Home />} />
          <Route path="/specialities" element={<Specialities />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
