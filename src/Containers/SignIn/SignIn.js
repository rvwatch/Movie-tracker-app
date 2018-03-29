import React, { Component } from 'react';
import { connect } from 'react-redux';

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

  render() {
    return (
      <form>
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
