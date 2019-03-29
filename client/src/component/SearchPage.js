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
              <span class="type">Trivia</span>
              <span>Karaoke</span>
              <span class="type">Drinks</span>
              <span class="type">Tacos</span>
              <span class="type">Bingo</span>
            </div>
          </h1>
          <h1 class="sentence" id="two">
            In
            <div class="slidingVertical">
              <span id="neighborhood">Midtown</span>
              <span id="neighborhood">West Midtown</span>
              <span id="neighborhood">Decatur</span>
              <span id="neighborhood">Highlands</span>
              <span id="neighborhood">Atlanta</span>
            </div>
          </h1>
        </section>
        <div id="barWrapper">
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default SearchPage;
