import React, { Component } from 'react';
import Header from './component/Header'
import BusinessDirectory from './component/BusinessDirectory';
import SearchBar from './component/SearchBar';
import FilterButtonRow from './component/FilterButtonRow';
// import MapBox from './component/MapBox';
import GoogleMap from './component/GoogleMap';
import BusinessModal from './component/BusinessModal';
import Button from '@material-ui/core/Button';
import './App.css';



class App extends Component {

  state = {
    open: false,
  };

  handleModalOpen = () => {
    this.setState({ open: true });
  };

  handleModalClose = () => {
    this.setState({ open: false})
  };

  render() {
    return (
     <div className="container">
        <Header/>
        <SearchBar/>
        <FilterButtonRow/>
        <GoogleMap/>
        {/* <MapBox/> */}
        <BusinessDirectory/>
        <Button onClick={this.handleModalOpen} id="modalOpen">Open Modal</Button>
        <BusinessModal/>
     </div>
    );
  };
}

export default App;
