import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
 
class AtlantaMap extends Component {
  state = {
    center: {
      lat: 33.774630,
      lng: -84.36098
    },
    zoom: 12
  }

 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '24em', width: '100%' }} id="mapEmbed">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDSI6lWAGiM5M4WzNSJB55KLUYzjwqX05k' }}
          center={{lat: parseFloat(this.props.latitude), lng: parseFloat(this.props.longitude)}}
          zoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default AtlantaMap;