import * as React from 'react';
import PropTypes from 'prop-types';

const User = ({ properties: { userName, avatar }, selected, onSelectUser }) => (
  <div
    className={`User ${selected && 'selected'}`}
    onClick={onSelectUser}
  >
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
  selected: PropTypes.bool.isRequired,
  onSelectUser: PropTypes.func.isRequired,
};

export default User;
