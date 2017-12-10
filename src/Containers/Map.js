import React from 'react';
import ol from 'openlayers';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import { connect } from 'react-redux';

import { selectUserById } from '../Actions/app.actions';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  componentDidMount() {
    const { sideBar: { users } } = this.props;
    const features = [];
    if (users) {
      _.each(users, (user) => {
        const point = new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.fromLonLat(user.geometry.coordinates)),
        });
        point.setId(user.id);
        point.setStyle(new ol.style.Style({
          image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
              color: '#fff',
            }),
            stroke: new ol.style.Stroke({
              color: user.properties.color,
              width: 1.5,
            }),
          }),
        }));
        features.push(point);
      });
    }

    const overlay = new ol.Overlay({
      element: this.popUp,
      autoPan: true,
      autoPanAnimation: {
        duration: 250,
      },
    });

    const vectorSource = new ol.source.Vector({
      features,
    });

    const vectorLayer = new ol.layer.Vector({
      source: vectorSource,
    });

    const map = new ol.Map({
      target: this.mapTargetElement,
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM(),
        }),
        vectorLayer,
      ],
      view: new ol.View({
        projection: 'EPSG:3857',
        center: [700000, 5000000],
        zoom: 2,
      }),
      overlays: [overlay],
      controls: [
        new ol.control.ZoomSlider(),
      ],
    });

    map.on('click', (e) => {
      map.forEachFeatureAtPixel(e.pixel, (feature) => {
        overlay.setPosition(feature.getGeometry().getCoordinates());
        this.props.selectUserById(feature.getId());
      });
    });
  }

  render() {
    return (
      <div className="map">
        <div
          ref={(handleRef) => { this.mapTargetElement = handleRef; }}
          className="ol-map"
        />
        <div id="popup" ref={(popUp) => { this.popUp = popUp; }} className="ol-popup">
          <button id="popup-closer" className="ol-popup-closer" />
          <div id="popup-content">
            {this.state.text}
          </div>
        </div>
      </div>);
  }
}

Map.propTypes = {
  sideBar: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.shape({
      users: PropTypes.array.isRequired,
    }).isRequired]).isRequired,
  selectUserById: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  sideBar: state.sideBar,
});

const mapDispatchToProps = dispatch => ({
  selectUserById: (id) => {
    dispatch(selectUserById(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);