import axios from "axios";

export const registerUser = async (userData) => {
  const response = await axios.post(
    "http://localhost:3001/api/users/register-user",
    userData
  );

  //   save the user into the locastorage

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};
