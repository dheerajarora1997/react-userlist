import React from 'react';
import './navbar.scss';
import {NavLink} from "react-router-dom";
import { useLocation } from "react-router-dom";


const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  //const splitLocation = pathname.split("/");

  // var isActive = pathname === ;
  // var activeNavLink = isActive ? 'active' : '';
  return (

<ul className="nav justify-content-end top-nav">
  <li className="nav-item">
  <NavLink
   className={({ isActive }) =>
    isActive ? "nav-link active" : "nav-link"
  }
  to="/">Home</NavLink>
  </li>
  <li className="nav-item">
  <NavLink 
  className={({ isActive }) =>
  isActive ? "nav-link active" : "nav-link"
}
  to="/userForm">User Form</NavLink>
  </li>
  <li className="nav-item">
  <NavLink className={({ isActive }) =>
    isActive ? "nav-link active" : "nav-link"
  }
   to="/userList">User List</NavLink>
  </li>

  <li className="nav-item">
  <NavLink 
  className={({ isActive }) =>
  isActive ? "nav-link active" : "nav-link"
}
  to="/transactionSummary">Transaction Summary</NavLink>
  </li>
</ul>

  );
}

export default Navbar;

