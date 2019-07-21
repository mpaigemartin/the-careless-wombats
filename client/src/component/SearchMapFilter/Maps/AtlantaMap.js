import React, { Component } from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

class AtlantaMap extends Component {
  state = {
    center: {
      lat: 39.956613,
      lng: -75.189944,
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {}
    },
    zoom: 12,
    points: [
      { lat: 42.02, lng: -77.01 },
      { lat: 42.03, lng: -77.02 },
      { lat: 41.03, lng: -77.04 },
      { lat: 42.05, lng: -77.02 }
    ],
    showInfoWindow: false
  };

  // onMarkerClick = (props, marker, e) =>
  //   this.setState({
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true
  //   });

  // onMapClick = props => {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     });
  //   }
  // };

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
          bounds={this.points}
          onClick={this.onMapClick}
        >
          {this.props.restaurantList.map(restaurant => (
            <Marker
              position={{ lat: restaurant.lat, lng: restaurant.lng }}
              onClick={this.onMarkerClick}
              title={restaurant.name}
              name={restaurant.name}
              url={restaurant.url}
              address={restaurant.address}
            >
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
