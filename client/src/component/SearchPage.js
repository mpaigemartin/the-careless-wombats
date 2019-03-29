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
             <span class="trivia">Trivia</span>
             <span>Karaoke</span>
             <span class="drinks">Drinks</span>
             <span class="tacos">Tacos</span>
             <span class="bingo">Bingo</span>
           </div>
         </h1>
         <h1 class="sentence" id="two">
           In
           <div class="slidingVertical">
             <span href="">Midtown</span>
             <span>West Midtown</span>
             <span>Decatur</span>
             <span>Highlands</span>
             <span>Atlanta</span>
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
