export const signinUser = async ({email, password}) => {
  console.log('ADDING!');
  const lowerCaseEmail = email.toLowerCase();

  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({email: lowerCaseEmail, password}), 
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
  } catch (errs) {
    console.log(errs.message);
  }
};
