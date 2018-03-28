import React, { Component } from 'react';
import { connect } from 'react-redux';

export class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <form>
        <label>
          <input type='email'
            placeholder='Email'
            value={this.state.email} />
        </label>
        <label>
          <input type='password' placeholder='Password'
            value={this.state.password} />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}

export default connect(null, null)(SignIn)