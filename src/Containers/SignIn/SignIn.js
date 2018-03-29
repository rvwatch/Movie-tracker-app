import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../../ApiCalls/signinUser';
import { Route, NavLink } from 'react-router-dom';
// const user = await signinUser();
// console.table(user);

export class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleInput = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    signinUser({ ...this.state });
    this.setState({ email: '', password: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <NavLink to="/new-user">Sign Up</NavLink>
        <label>
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            name="email"
            onChange={this.handleInput}
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            onChange={this.handleInput}
            name="password"
            value={this.state.password}
          />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

export default connect(null, null)(SignIn);
