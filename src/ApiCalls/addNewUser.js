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
    return data.id;
  } catch (errs) {
      throw new Error(errs.message);
  }
};
