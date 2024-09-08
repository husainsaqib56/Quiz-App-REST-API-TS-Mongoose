import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizStyles from "../styles/CreateQuiz.module.css";
import quizImage from "../assets/quizImg/quiz create.png";
import axios from "axios";

const CreateQuiz = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   axios
  //   .get("https://localhost:3002/")
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  // }, [])

  const handleAddQues = () => {
    setQuesList([...quesList, { question: "" }]);
  };

  const [values, setValues] = useState({
    name: "",
    category: "",
    level: "",
    privacy: "",
    allowedUser: "",
    passPercent: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const [optionList, setOptionList] = useState([{ option: "" }]);

  const handleAddOption = () => {
    setOptionList([...optionList, { option: " " }]);
  };

  const handleRemoveQues = (index) => {
    const qList = [...quesList];
    qList.splice(index, 1);
    setQuesList(qList);
  };

  const handleRemoveOption = (index) => {
    const list = [...optionList];
    list.splice(index, 1);
    setOptionList(list);
  };

  const [quesList, setQuesList] = useState([{ question: "" }]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const isValid = values.email && values.password && setValid(isValid);
    // setSubmitted(true);

    // if (isValid) {
    //   // Optional: Navigate if form is valid
    //   navigate("/create-quiz");
    // }
  };

  return (
    <>
      <div className={QuizStyles.main}>
        <h1 className={QuizStyles.heading}>Create Quiz</h1>

        <div className={QuizStyles.pageContent}>
          {/* <div className={QuizStyles.imageContainer}>
            <img src={quizImage} width={400} height={400} alt="Quiz" />
          </div> */}
          <div className={QuizStyles.pageHeader}>
            <div className={QuizStyles.formCard}>
              <form className={QuizStyles.quizForm} onSubmit={handleSubmit}>
                <label htmlFor="name">Quiz Name: </label>
                <input
                  className={QuizStyles.formField}
                  type="text"
                  placeholder="Enter quiz name"
                  name="name"
                  required
                  value={values.name}
                  onChange={handleInputChange}
                />
                {submitted && !values.email && (
                  <span id="name-error">Please enter quiz name</span>
                )}

                <label htmlFor="category">Category: </label>
                <select value={values.category} onChange={handleInputChange}>
                  <option value="">Choose Option</option>
                  <option value="option1">Exam</option>
                  <option value="option2">Test</option>
                  <option value="option3">Difficult</option>
                </select>

                {submitted && !values.category && (
                  <span id="name-error">Please enter quiz category</span>
                )}

                <label htmlFor="level">Level: </label>
                <select value={values.level} onChange={handleInputChange}>
                  <option value="">Choose Option</option>
                  <option value="option1">Easy</option>
                  <option value="option2">Medium</option>
                  <option value="option3">Difficult</option>
                </select>

                {submitted && !values.level && (
                  <span id="name-error">Enter quiz level:</span>
                )}

                <label htmlFor="privacy">Privacy: </label>
                <select value={values.privacy} onChange={handleInputChange}>
                  <option value="">Choose Option</option>
                  <option value="private">Private</option>
                  <option value="public">Public</option>
                </select>
                {submitted && !values.privacy && (
                  <span id="name-error">Enter quiz privacy:</span>
                )}

                <label htmlFor="privacy">Passing Percentage: </label>
                <input
                  className={QuizStyles.formField}
                  type="text"
                  placeholder="Enter your passing percentage"
                  name="passPercent"
                  required
                  value={values.passPercent}
                  onChange={handleInputChange}
                />
                {submitted && !values.passPercent && (
                  <span id="name-error">Enter quiz privacy:</span>
                )}
                <label htmlFor="privacy">Number of Allowed Users: </label>
                <input
                  className={QuizStyles.formField}
                  type="text"
                  placeholder="Enter number of allowed users"
                  name="allowedUser"
                  required
                  value={values.allowedUser}
                  onChange={handleInputChange}
                />
                {submitted && !values.allowedUser && (
                  <span id="name-error">Enter quiz privacy:</span>
                )}
                <button className={QuizStyles.btn}>Create</button>
              </form>
            </div>

            <div className="text-center">
              <button className={QuizStyles.btn}>Create</button>
            </div>
            {quesList.map((x, index) => (
              <div key={index} className={QuizStyles.questionCard}>
                <form>
                  <div className={QuizStyles.questionaire}>
                    <div className={QuizStyles.inputField}>
                      <div>
                        <label>Question. {index}</label>
                      </div>

                      <div>
                        <input
                          type="text"
                          className={QuizStyles.quesField}
                          placeholder="Write your question here"
                          name="text"
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    {optionList.map((x, index) => (
                      <div key={index} className={QuizStyles.options}>
                        <input
                          className={QuizStyles.otions}
                          type="text"
                          placeholder={`Option ${index + 1}`}
                          name="text"
                          onChange={handleInputChange}
                        />

                        {optionList.length - 1 === index &&
                          optionList.length < 4 && (
                            <button
                              type="button"
                              className={QuizStyles.addBtn}
                              onClick={handleAddOption}
                            >
                              Add
                            </button>
                          )}
                        {optionList.length !== 1 && (
                          <button
                            type="button"
                            className={QuizStyles.rmvBtn}
                            onClick={() => handleRemoveOption(index)}
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  {optionList.length - 1 === index &&
                    optionList.length < 10 && (
                      <button type="button" onClick={handleAddQues}>
                        Add Question
                      </button>
                    )}
                </form>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateQuiz;
