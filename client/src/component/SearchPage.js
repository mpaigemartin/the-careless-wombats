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

  typeClickHandler = (event) => {
    event.preventDefault();
    this.setState({ type: event.currentTarget.dataset.id });
    console.log(this.state.type);
  };

  neighborhoodClickHandler = event => {
    event.preventDefault();
    this.setState({ neighborhood: event.currentTarget.dataset.id });
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
              data-id="Trivia"
              >            
              Trivia
            </span>
            <span
              className="type"
              onClick={this.typeClickHandler}
              data-id="Karaoke"
            >
              Karaoke
            </span>
            <span
              className="type"
              onClick={this.typeClickHandler}
              data-id="Drink Specials"
            >
              Drinks
            </span>
            <span
              className="type"
              onClick={this.typeClickHandler}
              data-id="Food Specials"
            >
              Food
            </span>
            <span
              className="type"
              onClick={this.typeClickHandler}
              data-id="Bingo"
            >
              Bingo
            </span>
          </span>

          <span className="slidingVertical2">
            <p id="in">In</p>
            <span
              className="neighborhood"
              onClick={this.neighborhoodClickHandler}
              data-id="Midtown"
            >
              Midtown
            </span>
            <span
              className="neighborhood"
              onClick={this.neighborhoodClickHandler}
              data-id="West Midtown"
            >
              West Midtown
            </span>
            <span
              className="neighborhood"
              onClick={this.neighborhoodClickHandler}
              data-id="Decatur"
            >
              Decatur
            </span>
            <span
              className="neighborhood"
              onClick={this.neighborhoodClickHandler}
              data-id="All Atlanta"
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
