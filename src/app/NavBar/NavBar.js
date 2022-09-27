import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../resources/planet.png';

const NavBar = () => (
  <div className="navs">
    <div className="NavBar">
      <img src={logo} alt="logo" />
      <h1> Space rockets</h1>
    </div>
    <div className="Links">
      <NavLink to="/" className="home">Rockets</NavLink>
      <NavLink to="Missions" className="missions">Missions</NavLink>
      <NavLink to="MyProfile" className="myProfile">My Profile</NavLink>
    </div>
  </div>
);

export default NavBar;
