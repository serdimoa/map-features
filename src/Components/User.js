import * as React from 'react';
import PropTypes from 'prop-types';

const User = ({ properties: { userName, avatar } }) => (
  <div className="User">
    <img className="User__img" src={avatar} alt={userName} />
    {userName}
  </div>
);

User.propTypes = {
  // id: PropTypes.number.isRequired,
  properties: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
