import React, { Component } from 'react';

class GoogleMap extends Component {
  // this method gets called after the component
  // has been rendered to screen
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // using the ref="map" allows us to get
    // a reference to this div element below by calling
    // this.refs.map . This is how we generally
    // allow third-party libraries to interact/render in a React
    // application... by assigning a ref (reference)
    // to a particular element.
    return <div ref="map" />;
  }
}

export default GoogleMap;