import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { join, leave } from '../../Redux/mission/missionSlice';

const Join = (props) => {
  const { reserved, id } = props;
  const dispatch = useDispatch();

  const handleJoin = () => {
    dispatch(join(id));
  };

  const handleLeave = () => {
    dispatch(leave(id));
  };

  if (reserved) {
    return (
      <button type="button" className="leave" onClick={handleLeave}>
        Leave Mission
      </button>
    );
  }
  return (
    <button type="button" className="join" onClick={handleJoin}>
      Join Mission
    </button>
  );
};

Join.propTypes = {
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default Join;
