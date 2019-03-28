import React, { Component } from "react";
import Header from "../component/Header";
import SearchBar from "../component/SearchMapFilter/SearchBar";
import "../../src/App.css";

class SearchPage extends Component {
  render() {
    return (
      <div>
       <Header />
       <h1>Find near you</h1>
       <SearchBar />
      </div>
    );
  }
}

export default SearchPage;