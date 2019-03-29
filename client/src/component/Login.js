import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import UserContext from "../context/UserContext"
import Auth from "../utils/Auth";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

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
	
	input: {
		display: 'none',
	},
	dense: {
		marginTop: 19
	},
	menu: {
		width: 200
	}
});
class Login extends Component {
	static contextType = UserContext;

	state = {
		username: "",
		password: ""
	}

	changeHandler = (e) => {
		const {name, value} = e.target;
		this.setState({ [name]: value });
	}

	submitHandler = (e) => {
    e.preventDefault();
		const {username, password} = this.state;
		if (username && password) {
			Auth.logIn(username, password, (response) => {
				this.context.setUser(response);
				this.props.history.push("/Search");
			});
		}
	}

	render () {
		const { classes } = this.props;

		return (
			<form className={classes.container} onSubmit={this.submitHandler}>
				<TextField
					id="usernameLogin" 
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
				<Button variant="contained" color="secondary" type="submit"
				className={classes.button} fullWidth>Submit</Button>
			</form>
		);
	}
}

	Login.propTypes = {
		classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Login))