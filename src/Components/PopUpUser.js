import * as React from 'react';
import PropTypes from 'prop-types';

const PopUpUser = ({ userName, email }) => (
  <ul>
    <li><b>userName:</b>{userName}</li>
    <li><b>email:</b>{email}</li>
  </ul>
);

PopUpUser.propTypes = {
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PopUpUser;
