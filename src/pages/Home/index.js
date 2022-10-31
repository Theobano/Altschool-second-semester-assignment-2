import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./index.css";

function Home() {
  const [throwError, setError] = useState(false);

  if (throwError) {
    throw new Error("ErrorBoundary test");
  }
  return (
    <div className="home">
      <div className="inpage-nav">
        <NavLink to="route1">Route 1</NavLink>
        <NavLink to="route2">Route 2</NavLink>
      </div>
      <Outlet />
      <div className="center">
          <button className="error-boundary-button"
            onClick={() => {
              setError(true);
            }}
          >
            Throw Error
          </button>
      </div>
    </div>
  );
}

export default Home;
