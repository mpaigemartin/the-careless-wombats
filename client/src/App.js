import React, { Component } from 'react';
import Header from './component/Header'
import BusinessDirectory from './component/BusinessDirectory';
import SearchBar from './component/SearchBar';
import FilterButtonRow from './component/FilterButtonRow';
// import MapBox from './component/MapBox';
import GoogleMap from './component/GoogleMap';
import './App.css';



class App extends Component {
  render() {
    return (
     <div className="container">
        <Header/>
        <SearchBar/>
        <FilterButtonRow/>
        <GoogleMap/>
        {/* <MapBox/> */}
        <BusinessDirectory/>
     </div>
    );
  }
}

export default App;
