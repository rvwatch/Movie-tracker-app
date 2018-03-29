import React, { Component } from 'react';
import { connect } from 'react-redux';

export class NewUser extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
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
            type="text"
            placeholder="Name"
            value={this.state.name}
            name="name"
            onChange={this.handleInput}
          />
        </label>
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
            value={this.state.password}
            name="password"
            onChange={this.handleInput}
          />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

export default connect(null, null)(NewUser);
