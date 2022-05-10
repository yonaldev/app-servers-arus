import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import Layout from "./components/layouts";
import { default as AdminPage } from "./components/pages/Admin";
import { default as LoginPage } from "./components/pages/Login";
import { default as RegisterClientPage } from "./components/pages/RegisterClient";
import { default as SupportPage } from "./components/pages/SupportPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/register-client" element={<RegisterClientPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
