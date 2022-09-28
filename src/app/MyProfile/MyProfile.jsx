import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css'

const MyProfile = () => {
  const rocketData = useSelector((state) => state.rockets);
  const reserved = rocketData.filter((state) => state.reserved);

  const missionsData = useSelector((state) => state.missions);
  const reservedMissions = missionsData.filter((missions) => missions.reserved);

  return (
    <div className='profile'>
    <div className="rockets">
      <h2>Rockets</h2>
      <div>
        { reserved.map((rockets) => (
          <div key={rockets.rocket_id}>
            <p>{rockets.rocket_name}</p>
          </div>
        )) }
      </div>
      </div>

      <div className="missions">
        <h2>My Missions</h2>
        <div>
          {
            reservedMissions.map((missions) => (
              <div key={missions.mission_id}>
                <p>{missions.mission_name}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
