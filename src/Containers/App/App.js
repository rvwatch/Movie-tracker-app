import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import { getMovies } from '../../ApiCalls/getMovies';
import * as Actions from '../../Actions';
import CardContainer from '../CardContainer/CardContainer';
import { Login } from '../../Components/Login/Login';
import { addNewUser } from '../../ApiCalls/addNewUser';
import { signinUser } from '../../ApiCalls/signinUser';
import { Signin } from '../SignIn/SignIn';
import './App.css';

export class App extends Component {
  async componentDidMount() {
    const movies = await getMovies();
    this.props.retrieveMovies(movies);
  }

  render() {
    return (
      <div>
      <Route path='/' render={() => {
        return (
          <main className="App">
            <header>
              {!this.props.user.name && 
              <div>
                <NavLink to="/signIn">Login / SignUp</NavLink>
                <Login />
              </div>}
              {typeof this.props.error === 'string' && <h6>{this.props.error}</h6>}
            </header>
            <CardContainer />
          </main>
        )
      }}/>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user,
  error: state.error
})

export const mapDispatchToProps = dispatch => ({
  retrieveMovies: movies => dispatch(Actions.postMovies(movies))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
