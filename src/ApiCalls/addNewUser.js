export const addNewUser = async ({name, email, password}) => {
  // Default options are marked with *
  console.log('ADDING!');
  console.log(name, email, password)

  try {
    const response = await fetch('/api/users/new', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response);

    // const data = await response.json();

    // return data;
  } catch (errs) {
    console.log(errs.message);
  }
};
