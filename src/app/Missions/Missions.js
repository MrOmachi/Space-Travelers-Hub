import { useSelector } from 'react-redux';
import { missionState } from '../../Redux/mission/missionSlice';
import Join from './JoinBtn';
import Membership from './Membership';

function Missions() {
  const mission = useSelector(missionState);

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
                  <td><Membership reserved={!!mission.reserved} /></td>
                  <td><Join reserved={!!mission.reserved} id={mission.mission_id} /></td>
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
