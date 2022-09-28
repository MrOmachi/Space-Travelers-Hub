import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

const MyProfile = () => {
  const rocketData = useSelector((state) => state.rockets);
  const reserved = rocketData.filter((state) => state.reserved);

  const missionsData = useSelector((state) => state.missions);
  const reservedMissions = missionsData.filter((missions) => missions.reserved);

  return (
    <div className="profile">
      <div className="rockets">
        <h2>My Rockets</h2>
        <div className="myProfileInfo">
          { reserved.map((rockets) => (
            <div key={rockets.rocket_id} className="myprofeach">
              <p>{rockets.rocket_name}</p>
            </div>
          )) }

        </div>
      </div>

      <div className="missions">
        <h2>My Missions</h2>
        <div className="myProfileInfo">
          {
            reservedMissions.map((missions) => (
              <div key={missions.mission_id} className="myprofeach">
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
