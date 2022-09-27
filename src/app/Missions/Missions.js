import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, missionState } from '../../Redux/mission/missionSlice';

function Missions() {
  const missions = useSelector(missionState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  console.log(missions);
  return (
    <div>Missions</div>
  );
}

export default Missions;
