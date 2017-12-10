import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SideBar from './SideBar';
import Map from './Map';

const App = ({ sideBar }) => (
  <div className="App">
    <SideBar />
    {sideBar.users && <Map />}
  </div>
);

App.propTypes = {
  sideBar: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.shape({
      users: PropTypes.array.isRequired,
    }).isRequired]).isRequired,
};

const mapStateToProps = state => ({
  sideBar: state.sideBar,
});

export default connect(mapStateToProps)(App);
