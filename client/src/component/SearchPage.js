import React, { Component } from "react";
import Header from "../component/Header";
import SearchBar from "../component/SearchMapFilter/SearchBar";
import "../../src/App.css";

class SearchPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <section class="wrapper">
          <h1 class="sentence">
            Find
            <div class="slidingVertical">
              <span>Trivia</span>
              <span>Karaoke</span>
              <span>Drinks</span>
              <span>Tacos</span>
              <span>Bingo</span>
            </div>
          </h1>
          <h1 class="nearYou">Near You</h1>
        </section>
        <SearchBar />
      </div>
    );
  }
}

export default SearchPage;
