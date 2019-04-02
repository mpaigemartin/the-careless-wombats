import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import UserContext from "../../context/UserContext";
import Auth from "../../utils/Auth";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class Signup extends Component {
  static contextType = UserContext;

  state = {
    username: "",
    password: ""
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = e => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username && password) {
      Auth.signUp(username, password, response => {
        console.log(response);
      });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} onSubmit={this.submitHandler}>
        <TextField
          id="usernameSignup"
          label="username"
          type="text"
          name="username"
          className={classes.textField}
          value={this.state.username}
          onChange={this.changeHandler}
          margin="normal"
        />
        <TextField
          id="passwordLogin"
          label="password"
          className={classes.textField}
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.changeHandler}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          type="submit"
          fullWidth
        >
          Signup
        </Button>
      </form>
    );
  }
}
Signup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Signup));
