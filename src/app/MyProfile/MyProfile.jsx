import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rocketData = useSelector((state) => state.rockets);
  const reserved = rocketData.filter((state) => state.reserved);

  // const reserListRockets = reserved.map((rockets) => (
  //   <div key={rockets.rocket_id}>
  //     <h2>{rockets.rocket_name}</h2>
  //   </div>
  // ));

  return (
    <>
      <h2>Rockets</h2>
      <div>
        { reserved.map((rockets) => (
          <div key={rockets.rocket_id}>
            <p>{rockets.rocket_name}</p>
          </div>
        )) }
      </div>
    </>
  );
};

export default MyProfile;
