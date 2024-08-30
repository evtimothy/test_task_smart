import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/main/MainLayout";
import TablePage from "./pages/TablePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<TablePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
