import React from "react";
import {  NavLink } from "react-router-dom";
import { ToggleThemeButton } from "./buttons/Buttons";
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
            <ToggleThemeButton/>

        </div>
    );
}

export default NavBar;