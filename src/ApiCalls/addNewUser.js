export const addNewUser = async () => {
  // Default options are marked with *
  console.log('ADDING!');

  try {
    const response = await fetch('/api/users/new', {
      method: 'POST',
      body: JSON.stringify({
        name: 'adsfi',
        email: 'safsdfr@uuu.com',
        password: 'pass'
      }),
      headers: {
        'content-type': 'application/json'
      }
    });
    console.log(response);

    const data = await response.json();

    return data;
  } catch (errs) {
    console.log(errs.message);
  }
};
