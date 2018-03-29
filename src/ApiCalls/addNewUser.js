export const addNewUser = async ({name, email, password}) => {
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
    const data = await response.json();
    console.log(data);
    return data.id;
  } catch (errs) {
    console.log(errs.message);
  }
};
