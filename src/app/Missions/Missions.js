import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { missionState } from '../../Redux/mission/missionSlice';
import Join from './JoinBtn';
import Membership from './Membership';
import './mission.css';

function Missions() {
  const mission = useSelector(missionState);

  return (
    <div>
      {mission.length ? (
        <div>
          <Table striped bordered hover size="sm" className="mt-4 mx-auto w-75">
            <thead>
              <tr>
                <th>Mission</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {mission.map((mission) => (
                <tr key={mission.mission_id}>
                  <td>{mission.mission_name}</td>
                  <td>{mission.description}</td>
                  <td className="align-middle col-2"><Membership reserved={!!mission.reserved} /></td>
                  <td className="align-middle"><Join reserved={!!mission.reserved} id={mission.mission_id} /></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : null}
    </div>
  );
}

export default Missions;
