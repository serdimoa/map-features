import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import User from '../Components/User';

const SideBar = (props) => {
  const { sideBar: { users } } = props;
  if (!users) {
    return (
      <div>loading...</div>
    );
  }
  return (
    <div className="SideBar">
      {_.map(users, user => <User key={user.id} {...user} />)}
    </div>
  );
};

SideBar.propTypes = {
  sideBar: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.shape({
      users: PropTypes.array.isRequired,
    }).isRequired]).isRequired,
};

const mapStateToProps = state => ({
  sideBar: state.sideBar,
});

export default connect(mapStateToProps)(SideBar);
