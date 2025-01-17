import React from "react";
import AddService from "../components/AddService/index.jsx";
import ServicesList from "../components/ServiceList/index.jsx";
import ScrollToTop from "../components/ScrollToTop/index.jsx";
import useAuth from "../hooks/useAuth";
import { NavLink } from "react-router-dom";

function AllServicesPage() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <main>
        <ServicesList />
        {!isAuthenticated && (
          <p>
            <NavLink
              to="/signup"
              style={{ textDecoration: "underline", color: "#8750a5" }}
            >
              Regístrate
            </NavLink>{" "}
            o{" "}
            <NavLink
              to="/login"
              style={{ textDecoration: "underline", color: "#8750a5" }}
            >
              inicia sesión
            </NavLink>{" "}
            para agregar servicios.
          </p>
        )}
        <ScrollToTop />
        {isAuthenticated && <AddService />}
      </main>
    </>
  );
}

export default AllServicesPage;
