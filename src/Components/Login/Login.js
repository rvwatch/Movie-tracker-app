import React from 'react';
import { NewUser } from '../../Containers/NewUser/NewUser';
import { SignIn } from '../../Containers/SignIn/SignIn';

export const Login = () => {
  return (
    <article>
      <NewUser />
      <SignIn />
    </article>
  )
}
