import { useState, useEffect, } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../components/homepage";
import SecretPage from "../components/secret-page";
import Index from "../components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<HomePage />} />
          <Route path="secret" element={<SecretPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
