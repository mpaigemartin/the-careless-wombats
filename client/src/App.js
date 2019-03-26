import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
// import ProtectedRoute from "./component/ProtectedRoute";
import Login from "./component/Login";
import Signup from "./component/Signup";
// import UserContext from "./context/UserContext";

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
				{/* <UserContext.Provider value={{ setUser, user }}> */}
					{/* <ProtectedRoute exact path="/" component={HomePage} /> */}
          
					<Route exact path="/" component={Signup} />
          <Route exact path="/" component={Login} />
				{/* </UserContext.Provider> */}
			</div>
		</Router>
    );
  }
}

export default App;
