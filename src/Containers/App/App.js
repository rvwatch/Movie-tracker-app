import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { getMovies } from '../../ApiCalls/getMovies';
import * as Actions from '../../Actions';
import CardContainer from '../CardContainer/CardContainer';
import { Login } from '../../Components/Login/Login';
import { getFavorites } from '../../ApiCalls/getFavorites';
import PropTypes from 'prop-types';
import './App.css';

export class App extends Component {
  async componentDidMount() {
    const movies = await getMovies();
    this.props.retrieveMovies(movies);
    if (localStorage.getItem('lastUser')) {
      const user = this.getLastUser();
      this.props.signIn(user);
      const favorites = await getFavorites(user.id);
      this.props.addFavorites(favorites.data);
    }
  }

  componentDidUpdate() {
    this.saveUser(this.props.user);
  }

  getLastUser = () => {
    const stringed = localStorage.getItem('lastUser');
    return JSON.parse(stringed);
  };

  saveUser = user => {
    if (user.name) {
      const stringed = JSON.stringify(user);
      localStorage.setItem('lastUser', stringed);
    }
  };

  handleLogout = () => {
    localStorage.removeItem('lastUser');
    this.props.logout();
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <Route
          path="/"
          render={() => {
            return (
              <main className="App">
                <header>
                  <NavLink to="/" className="logo">
                    BLOCKBUSTER MOVIE TRACKER
                  </NavLink>
                  {this.props.user.name && (
                    <aside className="logged-in">
                      <button onClick={this.handleLogout}>Logout</button>
                      {this.props.location.pathname === '/' && (
                        <NavLink to="/favorites">View Favorites</NavLink>
                      )}
                      {this.props.location.pathname === '/favorites' && (
                        <NavLink to="/">View All</NavLink>
                      )}
                      <h1>Welcome: {this.props.user.name}</h1>
                    </aside>
                  )}
                  {!this.props.user.name && (
                    <aside className="logged-out">
                      <NavLink to="/signIn">Login / SignUp</NavLink>
                      <Login />
                    </aside>
                  )}
                  {typeof this.props.error === 'string' && (
                    <h6>{this.props.error}</h6>
                  )}
                </header>
                <CardContainer />
              </main>
            );
          }}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user,
  error: state.error
});

export const mapDispatchToProps = dispatch => ({
  retrieveMovies: movies => dispatch(Actions.postMovies(movies)),
  logout: () => dispatch(Actions.logoutUser()),
  signIn: user => dispatch(Actions.signInAction(user)),
  addFavorites: favorites => dispatch(Actions.addExistingFavs(favorites))
});

App.propTypes = {
  retrieveMovies: PropTypes.func,
  signIn: PropTypes.func,
  addFavorites: PropTypes.func,
  user: PropTypes.object,
  logout: PropTypes.func,
  location: PropTypes.object,
  error: PropTypes.bool,
  history: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
