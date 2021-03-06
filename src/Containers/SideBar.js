import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import User from '../Components/User';
import { selectUserById } from '../Actions/app.actions';

const SideBar = (props) => {
  const { sideBar: { users, selected } } = props;
  if (!users) {
    return (
      <div>loading...</div>
    );
  }

  return (
    <div className="SideBar">
      {_.map(users, user =>
        (<User
          onSelectUser={() => props.selectUserById(user.id)}
          key={user.id}
          {...user}
          selected={user.id === selected}
        />))}
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

const mapDispatchToProps = dispatch => ({
  selectUserById: (id) => {
    dispatch(selectUserById(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
