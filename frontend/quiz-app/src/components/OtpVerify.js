import React, { useState, useEffect } from "react";
import OtpStyles from "../styles/Otp.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OtpVerify = () => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);

  const [values, setValues] = useState({
    otp: "",
  });

  const [valid, setValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = {
      otp: values.otp,
    };
    axios
      .post("https://localhost:3002/auth/verify-registration-otp", isValid)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className={OtpStyles.main}>
        <div className={OtpStyles.formDiv}>
          <form className={OtpStyles.form} onSubmit={handleSubmit}>
            {submitted && valid && (
              <div className={OtpStyles.successMessage}>
                <div>You entered correct Otp!</div>
              </div>
            )}
            <h1>Verify OTP </h1>
            <h6>Otp has been sent on your email</h6>
            <label htmlFor="otp">Enter Otp: </label>
            <input
              className={OtpStyles.formField}
              type="number"
              placeholder="Enter OTP"
              name="otp"
              value={values.otp}
              onChange={handleInputChange}
            />
            <br></br>
            <div className={OtpStyles.btn}>
              <button
                className={OtpStyles.btn}
                disabled={isDisabled}
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OtpVerify;
