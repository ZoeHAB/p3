import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import "./App.css";

// import ServicesList from "./components/ServicesList.jsx"
// import Header from "./components/Header.jsx";
import PrivateRoutes from "./components/PrivateRoutes.jsx";

import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import AllServicesPage from "./pages/AllServicesPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import ResPas from "./pages/ResetPasword.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import AddService from "./pages/AddService.jsx";
import Footer from "./components/Footer/index.jsx";

function App() {
  return (
    <>
      {/* <ServicesList /> */}
      {/* <Header user={user} /> */}
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<AllServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/passreset" element={<ResPas />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/addService" element={<AddService />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
