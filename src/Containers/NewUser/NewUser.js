import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewUser } from '../../ApiCalls/addNewUser';
import * as Actions from '../../Actions';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

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

  handleSubmit = async () => {
    const { name, email } = this.state;
    try {
      const id = await addNewUser({ ...this.state });
      this.props.postNewUser({ name, email, id });
      this.props.validSignIn(false);
    } catch (error) {
      this.props.invalidSignIn(error.message);
    }
  };

  render() {
    return (
      <form className="login-menu" onSubmit={this.handleSubmit}>
        <h2>Create New Account</h2>
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
        <NavLink to="/" onClick={this.handleSubmit}>
          <button>Create</button>
        </NavLink>
        <NavLink className="toggle-signin-btn" to="/signIn">
          Already a Member?
        </NavLink>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  postNewUser: user => dispatch(Actions.addUser(user)),
  invalidSignIn: error => dispatch(Actions.invalidSignIn(error)),
  validSignIn: valid => dispatch(Actions.validSignIn(valid))
});

NewUser.propTypes = {
  postNewUser: PropTypes.func,
  invalidSignIn: PropTypes.func,
  validSignIn: PropTypes.func
};

export default withRouter(connect(null, mapDispatchToProps)(NewUser));
