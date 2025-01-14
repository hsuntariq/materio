import axios from "axios";

export const regUser = async (data) => {
  const response = await axios.post(
    "http://localhost:3001/api/users/register-user",
    data
  );

  if (response.data) {
    localStorage.setItem("myUser", JSON.stringify(response.data));
  }

  return response.data;
};

export const verifyOTP = async (otpData) => {
  const response = await axios.post(
    `http://localhost:3001/api/users/verify-otp/${otpData?.id}`,
    otpData
  );

  return response.data;
};
