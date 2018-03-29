export const signinUser = async () => {
  console.log('ADDING!');

  try {
    const response = await fetch('/api/users');

    return response;
  } catch (errs) {
    console.log(errs.message);
  }
};
