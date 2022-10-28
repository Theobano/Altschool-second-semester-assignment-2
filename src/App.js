import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components";

const Home = React.lazy(() => import("./pages/Home"));
const Users = React.lazy(() => import("./pages/Users"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <div id="app">
      <NavBar />
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} end />
          <Route path="/users" element={<Users />} end />
          <Route path="*" element={<NotFound />} end/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
