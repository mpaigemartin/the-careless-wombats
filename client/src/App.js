import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProtectedRoute from "./component/ProtectedRoute";
import Home from "./component/Home";
import SearchPage from "./component/SearchPage";
// import UserContext from "./context/UserContext";
import UserContext from "./context/UserContext";
import SearchBar from "./component/SearchMapFilter/SearchBar";
import LoginAndSignup from "./component/LoginAndRegister/LoginAndRegister";

class App extends Component {
  state = {
    user: null
  };

  setUser = user => {
    this.setState({ user });
  };

  render() {
    const { user } = this.state;
    const setUser = this.setUser;
    return (
      <Router>
        <div>
          <UserContext.Provider value={{ setUser, user }}>
            <ProtectedRoute exact path="/Search" component={SearchPage} />
            <Route exact path="/Home" component={Home} />
            {/* </UserContext.Provider> */}
            <Route exact path="/" component={LoginAndSignup} />
          </UserContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
