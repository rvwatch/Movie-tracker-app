export const addNewUser = async ({ name, email, password }) => {
  try {
    const response = await fetch("/api/users/new", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);
    } else {
      return data.id;
    }
  } catch (error) {
    throw new Error(`${email} already exists. Please enter a new email`);
  }
};
