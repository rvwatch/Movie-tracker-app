import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../../ApiCalls/signinUser';
import { NavLink, withRouter } from 'react-router-dom';
import {
  signInAction,
  invalidSignIn,
  validSignIn,
  addExistingFavs
} from '../../Actions';
import { getFavorites } from '../../ApiCalls/getFavorites';
import PropTypes from 'prop-types';

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

  handleSubmit = async () => {
    try {
      const user = await signinUser({ ...this.state });
      this.props.signInDispatch(user);
      this.props.validSignIn(false);
      const existingFavs = await getFavorites(user.id);
      this.props.addExistingFavs(existingFavs.data);
    } catch (error) {
      this.props.invalidSignIn(error.message);
    }
  };

  render() {
    return (
      <form className="login-menu">
        <h2>Please Sign In Below</h2>
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
        <NavLink to="/" onClick={this.handleSubmit}>
          <button>Sign-In</button>
        </NavLink>
        <NavLink className="toggle-signin-btn" to="/new-user">
          Create New Account
        </NavLink>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  signInDispatch: user => dispatch(signInAction(user)),
  invalidSignIn: error => dispatch(invalidSignIn(error)),
  validSignIn: valid => dispatch(validSignIn(valid)),
  addExistingFavs: existingFavs => dispatch(addExistingFavs(existingFavs))
});

SignIn.propTypes = {
  signInDispatch: PropTypes.func,
  invalidSignIn: PropTypes.func,
  validSignIn: PropTypes.func,
  promptSignin: PropTypes.func,
  addExistingFavs: PropTypes.func
};

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
