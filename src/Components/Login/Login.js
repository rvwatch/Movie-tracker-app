import React from 'react';
import { NewUser } from '../../Containers/NewUser/NewUser';
import { SignIn } from '../../Containers/SignIn/SignIn';
import { Switch, Router, Route, NavLink } from 'react-router-dom';


export const Login = () => {
  return (
    <article>
      <NewUser />

      <SignIn />
    </article>
  )
}
