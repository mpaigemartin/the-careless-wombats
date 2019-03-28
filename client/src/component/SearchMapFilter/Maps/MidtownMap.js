import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class MidtowneMap extends Component {
  static defaultProps = {
    center: {
      lat: 33.789295,
      lng: -84.375387
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
            lat={33.789295}
            lng={-84.375387}
            text={'Midtown Area'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default MidtowneMap;