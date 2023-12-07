/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import classes from "./FormQuiz.module.css";

function FormQuiz({ onReceiveQuestionsData }) {
  const [categories, setCategories] = useState([]);

  const [formInputs, setFormInputs] = useState({
    questionNumber: 10,
    category: "",
    difficulty: "",
  });

  function handleInputChange(e) {
    const inputId = e.target.id;
    let inputValue = e.target.value;

    if (inputId === "questionNumber" && (inputId < 1 || inputValue > 50))
      return;

    setFormInputs((prevFormInputs) => ({
      ...prevFormInputs,
      [inputId]: inputValue,
    }));
  }

  useEffect(() => {
    async function LookupCategories() {
      const res = await fetch("https://opentdb.com/api_category.php");
      const data = await res.json();
      setCategories(data.trivia_categories);
    }
    LookupCategories();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch(
      `https://opentdb.com/api.php?amount=${formInputs.questionNumber}&category=${formInputs.category}&difficulty=${formInputs.difficulty}&type=multiple`
    );
    const data = await res.json();

    if (data.response_code !== 0) {
      // handle errors
    }

    onReceiveQuestionsData(data.results);
  }
  return (
    <form method="post" className={classes.form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="questionNumber">
          Number of Questions(between 1 and 50):
        </label>
        <input
          type="number"
          name="questionNumber"
          id="questionNumber"
          min={1}
          max={50}
          required
          value={formInputs.questionNumber}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="category">Select Category:</label>
        <select
          name="category"
          id="category"
          value={formInputs.category}
          onChange={handleInputChange}
        >
          <option value="">Any Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="difficulty">Select Difficulty</label>
        <select
          name="difficulty"
          id="difficulty"
          value={formInputs.difficulty}
          onChange={handleInputChange}
        >
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button>Start Test</button>
    </form>
  );
}

export default FormQuiz;
