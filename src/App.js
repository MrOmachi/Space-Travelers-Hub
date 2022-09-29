import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './app/NavBar/NavBar';
import Rockets from './app/Rockets/Rockets';
import Missions from './app/Missions/Missions';
import MyProfile from './app/MyProfile/MyProfile';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/Rockets" element={<Rockets />} />
      <Route path="/Missions" element={<Missions />} />
      <Route path="/MyProfile" element={<MyProfile />} />
    </Routes>
  </BrowserRouter>
);

export default App;
