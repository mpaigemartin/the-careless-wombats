import React, { Component } from "react";
import Button from '@material-ui/core/Button';


class ScrollToTop extends Component {
  scrollUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  //SCROLLING functions

  scrollFunction = () => {
    window.pageYOffset < 500 ?
    document.getElementById('scrollBtn').style.display="none" :
    document.getElementById('scrollBtn').style.display="inline";  }

 componentDidMount() {
   window.pageYOffset === 0 ?
   document.getElementById('scrollBtn').style.display="none" :
   document.getElementById('scrollBtn').style.display="inline";

   window.addEventListener('scroll', this.scrollFunction);
};


  render(props) {
    return (
      <Button
        onClick={this.scrollUp}
        id="scrollBtn"
        title="Go to top"
      >
        Top
      </Button>
    );
  }
}

export default ScrollToTop;
