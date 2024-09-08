import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegisterStyles from "../styles/Register.module.css";
import quizImage from "../assets/quizImg/quiz.jpg";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [isDisabled, setIsDisabled] = useState(true); // initial value is true
  const [isFormComplete, setIsFormComplete] = useState(false);

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  // Enable/Disable submit button based on form completion
  useEffect(() => {
    const allFieldsFilled =
      values.name &&
      values.email &&
      values.password &&
      values.confirmPassword &&
      values.password === values.confirmPassword;

    setIsDisabled(!allFieldsFilled);
  }, [values]);

  const handleInputChange = (event) => {
    // event.preventDefault();
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    

    const data = {
      name: values.name,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };
   
    axios
      .post("http://localhost:3002/auth", data)
      .then((res) => {console.log(res.data.data.token)
        navigate('/otp');
      })
      .catch((err) => console.log(err));

  };

  return (
    <>
      <div className={RegisterStyles.main}>
        <h1 className={RegisterStyles.heading}>Quiz App</h1>
        <div className={RegisterStyles.pageContent}>
          <div className={RegisterStyles.imageContainer}>
            <img src={quizImage} width={400} height={400} alt="Quiz" />
          </div>
          <div className={RegisterStyles.form}>
            <h1 className={RegisterStyles.headingTwo}>Register Here</h1>
            <form
              className={RegisterStyles.registerForm}
              onSubmit={handleSubmit}
            >
              {submitted && valid && (
                <div className={RegisterStyles.successMessage}>
                  <h3>Welcome {values.name}</h3>
                  <div>Your Registration is successful!</div>
                </div>
              )}
              <label htmlFor="name">Name: </label>
              <input
                className={RegisterStyles.formField}
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
                name="name"
                required
                value={values.name}
                onChange={handleInputChange}
              />
              {submitted && !values.name && (
                <span id="name-error">Please enter your name</span>
              )}
              <label htmlFor="email">Email:</label>
              <input
                className={RegisterStyles.formField}
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
              {submitted && !values.email && (
                <span id="email-error">Please enter an email address</span>
              )}
              <label htmlFor="password">Password:</label>
              <input
                className={RegisterStyles.formField}
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
              />
              <label htmlFor="confrimPassword">Confirm Password:</label>
              <input
                className={RegisterStyles.formField}
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleInputChange}
              />
              {submitted && values.password !== values.confrimPassword && (
                <span id="password-error">Passwords do not match</span>
              )}
              <br />
              <div className={RegisterStyles.btnContainer}>
                <button
                  className={RegisterStyles.Regbutton}
                  disabled={isDisabled}
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <br />
                <button
                  className={RegisterStyles.Regbutton}
                  type="button"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </div>
              <label>Already registered? Then Login</label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
