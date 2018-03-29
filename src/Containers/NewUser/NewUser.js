import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewUser } from '../../ApiCalls/addNewUser';
import * as Actions from '../../Actions';
import { NavLink } from 'react-router-dom';

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

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email } = this.state
    const id = await addNewUser({ ...this.state });
    this.props.postNewUser({name, email, id});
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <NavLink to="/signIn">Login</NavLink>
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

const mapDispatchToProps = (dispatch) => ({
  postNewUser: (user) => dispatch(Actions.addUser(user))
})

export default connect(null, mapDispatchToProps)(NewUser);
