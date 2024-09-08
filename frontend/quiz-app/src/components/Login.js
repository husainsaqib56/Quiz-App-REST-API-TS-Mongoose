import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginStyles from "../styles/Login.module.css";
import quizImage from "../assets/quizImg/quizlogin.webp";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   axios
  //   .get("https://localhost:3002/")
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));
   
  
  // }, [])
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleInputChange = (event) => {
    // event.preventDefault();
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = values.email && values.password && setValid(isValid);
    setSubmitted(true);

    if (isValid) {
      // Optional: Navigate if form is valid
      navigate("/create-quiz");
    }
  };

  return (
    <>
      <div className={LoginStyles.main}>
        <h1 className={LoginStyles.heading}>Login</h1>
        <div className={LoginStyles.pageContent}>
          <div className={LoginStyles.imageContainer}>
            <img src={quizImage} width={400} height={400} alt="Quiz" />
          </div>
          <div className={LoginStyles.form}>
            <h1 className={LoginStyles.headingTwo}>Login Here</h1>
            <form className={LoginStyles.LoginForm} onSubmit={handleSubmit}>
              <label htmlFor="name">Email: </label>
              <input
                className={LoginStyles.formField}
                type="text"
                placeholder="Enter email id"
                autoComplete="off"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
              {submitted && !values.email && (
                <span id="name-error">Please enter your email address</span>
              )}

              <label htmlFor="name">Password: </label>
              <input
                className={LoginStyles.formField}
                type="password"
                placeholder="Enter your password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
              />
              {submitted && !values.email && (
                <span id="name-error">Please enter your password</span>
              )}
            </form>

            <div className={LoginStyles.btnContainer}>
              <button className={LoginStyles.Regbutton }onClick={() => navigate("/home")}>Login</button>
              <button className={LoginStyles.Regbutton }onClick={() => navigate("/")}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
