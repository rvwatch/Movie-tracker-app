import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../../ApiCalls/signinUser';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { signInAction } from '../../Actions';
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

  handleSubmit = async (event) => {
    event.preventDefault();
    const user = await signinUser({ ...this.state });
    console.log(user);
    this.props.signInDispatch(user)
    this.setState({ email: '', password: '' });
  };

  render() {
    return (
      <form>
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
        <NavLink to='/' onClick={this.handleSubmit}>
          <button>Submit</button>
        </NavLink>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signInDispatch: (user) => dispatch(signInAction(user))
})

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
