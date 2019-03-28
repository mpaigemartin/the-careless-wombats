import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class AllAtlanta extends Component {
  static defaultProps = {
    center: {
      lat: 33.774630,
      lng: -84.36098
    },
    zoom: 12
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '24em', width: '100%' }} id="mapEmbed">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDSI6lWAGiM5M4WzNSJB55KLUYzjwqX05k' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={33.774630}
            lng={-84.36098}
            text={'Atlanta'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default AllAtlanta;