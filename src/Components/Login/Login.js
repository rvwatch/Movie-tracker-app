import React from 'react';
import { NewUser } from '../../Containers/NewUser/NewUser';
import { SignIn } from '../../Containers/SignIn/SignIn';
import { Switch, Router, Route, NavLink } from 'react-router-dom';


export const Login = () => {
  return (
    <article>
      <Switch>
        <Route exact path='/signin' />
        <Route 
          exact path='/new-user'
          render={() => <NewUser />}
        />
        <Route
          exact path='/login'
          render={() => <SignIn />}
        />
      </Switch>
    </article>
  );
};
