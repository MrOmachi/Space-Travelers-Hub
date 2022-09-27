import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../../Redux/Rockets/rocketreducers';
import './Rockets.css';

const Rocket = (props) => {
  const { rocket } = props;
  return (
    <div className="each">
      <div className="pictFrame">
        <img src={rocket.flickr_images} alt={rocket.rocket_name} className="pict" />
      </div>
      <div className="infor">
        <h2>{rocket.rocket_name}</h2>
        <p>
          <span className="reservRock">
            Reserved
          </span>
          {rocket.description}
        </p>
        <button type="submit" className="rocketBtn">Reserve Rocket</button>
      </div>
    </div>
  );
};
Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsData = useSelector((state) => state.rockets);
  useEffect(() => {
    if (!rocketsData.length) {
      dispatch(getRockets());
    }
  });
  return (
    <div className="Rocketslist">
      {rocketsData.map((rocketData) => (
        <Rocket key={rocketData.id} rocket={rocketData} />
      ))}
    </div>
  );
};
export default Rockets;
