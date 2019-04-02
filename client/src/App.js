import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./component/ProtectedRoute";
import Home from "./component/Home";
// import UserContext from "./context/UserContext";
import UserContext from "./context/UserContext";
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
            <ProtectedRoute exact path="/Search" render={() => (
              this.user ? (
                <Redirect to="/Home"/>
              ) : (
                <Home/>
              )
            )} />
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
