import React from 'react';

export default class GoogleMap extends React.Component {

  insertScript() {
    var script = document.createElement('script');
    script.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?callback=initMap');
    script.setAttribute('defer', 'defer');
    script.setAttribute('async', 'async');
    document.body.appendChild(script);
  }

  componentWillMount() {
  }

  componentDidMount() {

    this.insertScript();

    var el = React.findDOMNode(this.refs.map);

    var self = this;
    window.initMap = function() {

      self.map = new google.maps.Map(el, {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });

      var marker = new google.maps.Marker({
        position: {lat: -34.397, lng: 150.644},
        map: self.map,
        title: 'Hello World!'
      });

      //fit map to all the markers
      //var bounds = new google.maps.LatLngBounds();
      //bounds.extend(marker.position);
      //map.fitBounds(bounds);

      //remove marker
      //marker.setMap(null);

    };

  }

  //componentWillUnmount() {
  //}

  render() {
    return <div ref="map" style={{width: this.props.width, height: this.props.height}} g-md="cols:6"></div>;
  }

};

GoogleMap.propTypes = {
  width:  React.PropTypes.string,
  height: React.PropTypes.string
};

GoogleMap.defaultProps = {
  width:  '100%',
  height: '20em'
};