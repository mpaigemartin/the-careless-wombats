import React, { Component } from "react";
import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react";

class AtlantaMap extends Component {
  state = {
    center: {
      lat: 33.77463,
      lng: -84.36098
    },
    zoom: 11,
    points: [
      { lat: 42.02, lng: -77.01 },
      { lat: 42.03, lng: -77.02 },
      { lat: 41.03, lng: -77.04 },
      { lat: 42.05, lng: -77.02 }
    ],
    showInfoWindow: false

  };

  handleClick = e => {
    this.setState({
        showInfoWindow: true
    });
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        style={{ height: "400px", width: "960px", position: "relative" }}
        id="mapEmbed"
      >
        <Map
          google={this.props.google}
          defaultCenter={this.props.center}
          center={{
            lat: parseFloat(this.props.latitude),
            lng: parseFloat(this.props.longitude)
          }}
          zoom={this.props.zoom}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave}
          bounds={this.points}
        >
          {this.props.restaurantList.map(restaurant => (
            <Marker 
            position={{ lat: restaurant.lat, lng: restaurant.lng }}
            onClick={this.handleClick}
            >
            {this.state.showInfoWindow && (
              <InfoWindow>
                  <h4>{restaurant.name}</h4>
              </InfoWindow>
                )}
            </Marker>
          ))}
          
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDSI6lWAGiM5M4WzNSJB55KLUYzjwqX05k"
})(AtlantaMap);
