import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import ErrorBoundary from "./errorboundaries/ErrorBoundary";
import Loader from "./components/Loader";

const Home = React.lazy(() => import("./pages/Home"));
const Users = React.lazy(() => import("./pages/Users"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Route1 = React.lazy(() => import("./components/Route1"));
const Route2 = React.lazy(() => import("./components/Route2"));


function App() {
  return (
    <div id="app">
      <NavBar />
      <ErrorBoundary>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<ErrorBoundary>
            <Home />
            </ErrorBoundary>
            } end >
              <Route path="/route1" element={<Route1/>} />
              <Route path="/route2" element={<Route2/>}/>

            </Route>
            <Route path="/users" element={
              <ErrorBoundary>
              <Users />
              </ErrorBoundary>
            } end />
            <Route path="*" element={
              <ErrorBoundary>
              <NotFound />
              </ErrorBoundary>
            } end />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
