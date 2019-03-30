import React, { Component } from 'react';
import axios from 'axios';
import Header from '../component/Header';
import BusinessDirectory from '../component/BusinessDirectory';
import SearchBar from './SearchMapFilter/SearchBar';
import FilterButtonRow from './SearchMapFilter/FilterButtonRow';
import AllAtlanta from './SearchMapFilter/Maps/AtlantaMap';
import '../../src/CSS/App.css';

class Home extends Component {
  state = {
    restaurantList: [],
    keywordSearch: '',
    searchResults: [],
    single: '',
    restaurantQuery: '',
    whichMap: <AllAtlanta />
  };

  createRestaurantList = () => {
    axios
      .get('api/restaurant')
      .then(result => {
        // const places = result.data; //these two lines return an array of strings=restaurant names only
        // this.setState({ restaurantList: places.map(({ name }) => name)})
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

  handleMap = event => {
    event.preventDefault();
    const mapMe = `<${event.target.value} />`;
    this.setState({whichMap: mapMe});
    console.log(this.whichMap);
  }

  componentDidMount() {
    // this.searchResults();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <SearchBar
          searchChangeHandler={this.searchChangeHandler}
          searchClickHandler={this.searchClickHandler}
        />
        <FilterButtonRow onClick={this.handleMap}/>
        {/* {this.state.whichMap} */}
        <BusinessDirectory />
      </div>
    );
  }
}

export default Home;
