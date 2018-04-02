export const signinUser = async ({email, password}) => {
  const lowerCaseEmail = email.toLowerCase();

  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({email: lowerCaseEmail, password}), 
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const user = await response.json();
    return user.data;
  } catch (errs) {
    throw new Error('Email and Password do not match');
  }
};
