export const signinUser = async () => {
  console.log('ADDING!');

  try {
    const response = await fetch('api/users', {
      method: 'POST',
      body: JSON.stringify({email: "tman2272@aol.com", password: "password"}), 
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
