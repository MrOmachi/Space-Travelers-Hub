import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <div className="NavBar">
      <h1> Space rockets</h1>
    </div>
    <div className="Links">
      <Link to="/" className="home">Rockets</Link>
      <Link to="Missions" className="missions">Missions</Link>
      <Link to="MyProfile" className="myProfile">My Profile</Link>
    </div>
  </div>
);

export default NavBar;
