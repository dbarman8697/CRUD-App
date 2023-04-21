import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import { Admin } from "./Admin";
import Login from "./Login";
import ProvateRoute from "../components/ProvateRoute";
import EditPage from "./EditPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/add-product"
        element={
          <ProvateRoute>
            <Admin />
          </ProvateRoute>
        }
      />
      <Route
        path="edit/:id"
        element={
          <ProvateRoute>
            <EditPage />
          </ProvateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};

export default MainRoutes;
