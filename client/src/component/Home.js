import React, { Component } from 'react';
import axios from 'axios';
import Header from '../component/Header';
import BusinessDirectory from '../component/BusinessDirectory';
import SearchBar from './SearchMapFilter/SearchBar';
import FilterButtonRow from './SearchMapFilter/FilterButtonRow';
import AllAtlanta from './SearchMapFilter/Maps/AtlantaMap';
import BusinessModal from '../component/BusinessModal';
import '../../src/CSS/App.css';

class Home extends Component {
  state = {
    restaurantList: null,
    keywordSearch: '',
    searchResults: [{
      name: "Cypress Street Pint & Plate",
      address: "817 W Peachtree St Northwest E-125, Atlanta, GA  30308",
      url: "http://cypressbar.com/",
      tagline: "A rotating lineup of beers on tap pairs with hearty American grub at a relaxed tavern with a patio."
    }],
    single: '',
    restaurantQuery: '',
    whichMap: <AllAtlanta />,
    place: "",
    address: "",
    tagline: "",
    url: "",
    events: [],
    open: false,
    arriveData: false
  };

  //for BusinessModal
  getData = (val) =>{
    const results = val.data[0];
    this.setState({
      single: val.data[0],
      place: results.name,
      neighborhood: results.neighborhood,
      tagline: results.tagline,
      address: results.address,
      url: results.url,
      events: results.events
    })
    console.log(val.data[0])
    console.log(this.state.single);
  }



  handleOpen = () => {
    this.setState({ open: true });
  }
  handleClose = () => {
    this.setState({ open: false });
  };
  handleBusinessChange = (newValue) => {
    this.setState({ single: newValue })
  }
  handleBusinessClick = () => {
    console.log(this.state.single);
    this.setState({ open: true });
    axios.get(`/api/restaurant/${this.state.single}`).then(res => {
      const result = res.data[0];
      console.log(result);
    });
  }

  createRestaurantList = () => {
    axios
      .get('/api/restaurant')
      .then(result => {
        console.log(result)
        this.setState({restaurantList: result.data}) // this line returns an array of objects
        console.log(this.state.restaurantList
        );
      })
  };

  searchResults = () => {
    axios.get(`/api/restaurant/${this.state.keywordSearch}`).then(result => {
      this.setState({ searchResults: result.body });
      console.log(this.state.searchResults);
    });
  };

  searchChangeHandler = event => {
    event.preventDefault();
    const keywordSearch = event.target.value;
    this.setState({ keywordSearch: keywordSearch });
    console.log(this.state.keywordSearch);
  };

  searchClickHandler = event => {
    event.preventDefault();
    this.searchResults();
    console.log(this.state.searchResults)
  }

  handleMap = event => {
    event.preventDefault();
    const mapMe = `<${event.target.value} />`;
    this.setState({whichMap: mapMe});
    console.log(this.whichMap);
  }



  grabRestaurants = () => {
    axios.get('/api/restaurant').then(
      result => {
        this.setState({restaurantList: result});
        console.log(this.state.restaurantList);
      }
    )
  }

  componentDidMount() {
    //this.searchResults();
    this.grabRestaurants();
  }

  render() {
    const arriveData = this.state.arriveData
    return (
      <div className="container">
        <Header />
        <SearchBar
          sendData={this.getData}
          single={this.state.single}
          searchChangeHandler={this.searchChangeHandler}
          handleChange={this.handleBusinessChange}
          handleClick={this.handleBusinessClick}
          handleClose={this.handleClose}
        />
        <FilterButtonRow onClick={this.handleMap}/>
        {this.state.restaurantList ? (<BusinessDirectory restaurantList={this.state.restaurantList}/>
        ) : (
          null
        )}
        <BusinessModal 
          name={this.state.place}
          address={this.state.address}
          url={this.state.url}
          tagline={this.state.tagline}
          events={this.state.events}
          handleClose={ this.handleClose} 
          handleOpen={this.handleOpen} 
          open={this.state.open}
        />
      </div>
    );
  }
}

export default Home;
