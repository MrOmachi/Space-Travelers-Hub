import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, missionState } from '../../Redux/mission/missionSlice';

function Missions() {
  const mission = useSelector(missionState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  return (
    <div>
      {mission.length ? (
        <div>
          <table>
            <thead>
              <tr>
                <td>Mission</td>
                <td>description</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {mission.map((mission) => (
                <tr key={mission.mission_id}>
                  <td>{mission.mission_name}</td>
                  <td>{mission.description}</td>
                  <td><button type="button">Not a member</button></td>
                  <td><button type="button">Join Mission</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}

export default Missions;
