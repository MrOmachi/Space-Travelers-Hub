import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../resources/space_logo.png';

const NavBar = () => (
  <div className="navs">
    <div className="NavBar">
      <img src={logo} className="App-logo" alt="logo" />
      <h1> Space Traveler&apos;s Hub</h1>
    </div>
    <div className="Links">
      <NavLink to="/Rockets" className="homel">Rockets</NavLink>
      <NavLink to="/Missions" className="missionsl">Missions</NavLink>
      <NavLink to="/MyProfile" className="myProfilel">My Profile</NavLink>
    </div>
  </div>
);

export default NavBar;
