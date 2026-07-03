import React from "react";
import { Route, Routes } from "react-router-dom";
import { DashBoard, Landing } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Landing />} />
      <Route path={"/dashboard"} element={<DashBoard />} />
    </Routes>
  );
};

export default App;
