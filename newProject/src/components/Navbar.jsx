import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp1-BNwSEhfNYcfjxnNlNJnivlIqeiTwnzQg&s"
          alt=""
        />
      </div>
      <div className="links">
        <NavLink
          className="nav-link"
          to="/"
          style={({ isActive }) => {
            return isActive
              ? { color: "white" }
              : { color: " rgb(255, 94, 0)" };
          }}
        >
          Home
        </NavLink>
        <NavLink
          className="nav-link"
          to="/create"
          style={({ isActive }) => {
            return isActive
              ? { color: "white" }
              : { color: " rgb(255, 94, 0)" };
          }}
        >
          Create Recipe
        </NavLink>
        <NavLink
          className="nav-link"
          to="/recipes"
          style={({ isActive }) => {
            return isActive
              ? { color: "white" }
              : { color: " rgb(255, 94, 0)" };
          }}
        >
          Recipes
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
