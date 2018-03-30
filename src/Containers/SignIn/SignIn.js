import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../../ApiCalls/signinUser';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { signInAction, invalidSignIn, validSignIn, addExistingFavs } from '../../Actions';
import { getFavorites } from '../../ApiCalls/getFavorites';

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
  signInDispatch: user => dispatch(signInAction(user)),
  invalidSignIn: error => dispatch(invalidSignIn(error)),
  validSignIn: valid => dispatch(validSignIn(valid)),
  addExistingFavs: existingFavs => dispatch(addExistingFavs(existingFavs))
});

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
