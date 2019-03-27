import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import UserContext from "../context/UserContext"
import Auth from "../utils/Auth";

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
    console.log('clicked');
    console.log("This would be the click to the api route to login. It would use middleware with bcrypt to hash the password then compare.");
		const {username, password} = this.state;
		if (username && password) {
			Auth.logIn(username, password, (response) => {
				console.log(response);
				this.context.setUser(response);
				this.props.history.push("/");
			});
		}
	}

	render () {
		return (

			<form onSubmit={this.submitHandler}>
				<input 
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.changeHandler}
				/>
				<input
					type="password"
					name="password" 
					value={this.state.password}
					onChange={this.changeHandler}
				/>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

export default withRouter(Login);