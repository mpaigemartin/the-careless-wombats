import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import ProtectedRoute from "./component/ProtectedRoute";
import Login from "./component/Login";
import Signup from "./component/Signup";
import UserContext from "./context/UserContext";
import SearchBar from "./component/SearchBar";

class App extends Component {

  state = {
    user: null
  }

  setUser = (user) => {
	  this.setState({ user });
  }

  render() {
	const {user} = this.state;
	const setUser = this.setUser;
    return (
		<Router>
			<div>
				<UserContext.Provider value={{ setUser, user }}>
					<ProtectedRoute exact path="/" component={SearchBar} />
          
					<Route exact path="/login" component={Signup} />
          <Route exact path="/login" component={Login} />
				</UserContext.Provider>
			</div>
		</Router>
    );
  }
}

export default App;
