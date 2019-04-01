import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import RestaurantPins from './RestaurantPins';
 
 
class AtlantaMap extends Component {
  state = {
    center: {
      lat: 33.774630,
      lng: -84.36098
    },
    zoom: 12,
    points: [
      { lat: 42.02, lng: -77.01 },
      { lat: 42.03, lng: -77.02 },
      { lat: 41.03, lng: -77.04 },
      { lat: 42.05, lng: -77.02 }
  ]
  }
  


  


  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '24em', width: '100%' }} id="mapEmbed">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDSI6lWAGiM5M4WzNSJB55KLUYzjwqX05k' }}
          defaultCenter={this.props.center}
          center={{lat: parseFloat(this.props.latitude), lng: parseFloat(this.props.longitude)}}
          zoom={this.props.zoom}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave}
          bounds={this.points}
        >
        </GoogleMapReact>
        {/* <RestaurantPins
        restaurantList={this.props.restaurantList} /> */}
        
      </div>
    );
  }
}
 
export default AtlantaMap;