import React from 'react';
import PropTypes from 'prop-types';
import './mission.css';

const Membership = (props) => {
  const { reserved } = props;
  if (reserved) {
    return (
      <span className="memberA">
        Active Member
      </span>
    );
  }
  return (
    <span className="notMem">Not A MEMBER</span>
  );
};

Membership.propTypes = {
  reserved: PropTypes.bool.isRequired,
};

export default Membership;
