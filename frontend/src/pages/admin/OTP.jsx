import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { userReset, verifyOTPData } from "../../features/users/userSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function OTP() {
  const [otp, setOtp] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, userMessage, userError, userLoading, userSuccess } =
    useSelector((state) => state.auth);

  useEffect(() => {
    if (userError) {
      toast.error(userMessage);
    }

    if (userSuccess) {
      toast.success("OTP verified!");
      navigate("/admin/dashboard");
    }

    dispatch(userReset());
  }, [userError, userSuccess]);

  const handleOTP = () => {
    dispatch(verifyOTPData({ otp }));
  };

  return (
    <>
      <div className="container min-vh-100 d-flex jusitfy-content-center align-items-center">
        <div className="card col-lg-6 mx-auto p-5 rounded-3 shadow-lg">
          <h3 className="text-center my-4">Enter verification code</h3>
          <OtpInput
            value={otp}
            onChange={setOtp}
            inputType="number"
            inputStyle={{
              width: "100%",
              height: "70px",
              border: "1px solid lightgray",
              borderRadius: "10px",
              fontSize: "2rem",
            }}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />

          <div className="d-flex gap-3 mt-4 justify-content-center">
            <button className="btn btn-danger">Clear</button>
            <button onClick={handleOTP} className="btn btn-success">
              Verify
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
