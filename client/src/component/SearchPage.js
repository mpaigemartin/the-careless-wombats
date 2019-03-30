import React, { Component } from "react";
import Header from "../component/Header";
import SearchBar from "../component/SearchMapFilter/SearchBar";
import "../../src/CSS/App.css";
import "../../src/CSS/VerticalScrollingMenu.css";

class SearchPage extends Component {
  state = {
    type: "",
    neighborhood: ""
  };

  typeClickHandler = event => {
    event.preventDefault();
    this.setState({ type: event.currentTarget.value });
    console.log(this.state.type);
  };

  neighborhoodClickHandler = event => {
    event.preventDefault();
    this.setState({ neighborhood: event.currentTarget.value });
    console.log(this.state.neighborhood);
  }

  render() {
    return (
      <div>
        <Header />
        <section className="wrapper">
          <p id="find">Find</p>
          <span className="slidingVertical">
            <span
              className="type"
              onClick={this.typeClickHandler}
              value="Trivia"
            >
              Trivia
            </span>
            <span
              className="type"
              onClick={this.typeClickHandler}
              value="Karaoke"
            >
              Karaoke
            </span>
            <span
              className="type"
              onClick={this.typeClickHandler}
              value="Drink Specials"
            >
              Drinks
            </span>
            <span
              className="type"
              onClick={this.typeClickHandler}
              value="Food Specials"
            >
              Food
            </span>
            <span
              className="type"
              onClick={this.typeClickHandler}
              value="Bingo"
            >
              Bingo
            </span>
          </span>

          <span className="slidingVertical2">
            <p id="in">In</p>
            <span
              className="neighborhood"
              onClick={this.neighborhoodClickHandler}
              value="Midtown"
            >
              Midtown
            </span>
            <span
              className="neighborhood"
              onClick={this.neighborhoodClickHandler}
              value="West Midtown"
            >
              West Midtown
            </span>
            <span
              className="neighborhood"
              onClick={this.neighborhoodClickHandler}
              value="Decatur"
            >
              Decatur
            </span>
            <span
              className="neighborhood"
              onClick={this.neighborhoodClickHandler}
              value="All Atlanta"
            >
              Atlanta
            </span>
          </span>
        </section>
        <div id="barWrapper">
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default SearchPage;
