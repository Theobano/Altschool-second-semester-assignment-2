import React from "react";
import {  NavLink } from "react-router-dom";
import "./navbar.css"

function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <NavLink to="/" end>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/users">Users</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;