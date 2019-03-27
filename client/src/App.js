import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProtectedRoute from './component/ProtectedRoute';
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home';
import SearchPage from './component/SearchPage';
// import UserContext from "./context/UserContext";
import UserContext from './context/UserContext';
import SearchBar from './component/SearchBar';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       // light: will be calculated from palette.primary.main,
//       main: '#ff4400',
//       // dark: will be calculated from palette.primary.main,
//       // contrastText: will be calculated to contrast with palette.primary.main
//     },
//     secondary: {
//       light: '#0066ff',
//       main: '#0044ff',
//       // dark: will be calculated from palette.secondary.main,
//       contrastText: '#ffcc00',
//     },
//     // error: will use the default color
//   },
// });

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
            <ProtectedRoute exact path="/" component={SearchBar} />

            <Route exact path="/Search" component={SearchPage} />
            <Route exact path="/Home" component={Home} />
            {/* </UserContext.Provider> */}
            <Route exact path="/login" component={Signup} />
            <Route exact path="/login" component={Login} />
          </UserContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
