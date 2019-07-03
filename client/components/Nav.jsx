import React from "react";

import { Link, NavLink } from "react-router-dom";

const Nav = props => {
  return (
    // React.Fragment === <>
    <>
      <ul className="row-center-between">
        <li>
          <Link to="/" exact activeStyle={{ color: "green" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Create">Create</Link>
        </li>
        <li>
          <Link to="/Read">Read</Link>
        </li>
        <li>
          <Link to="/Update">Update</Link>
        </li>
        <li>
          <Link to="/Delete">Delete</Link>
        </li>
        <li>
          <Link to="/Creepers">Creepers</Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
