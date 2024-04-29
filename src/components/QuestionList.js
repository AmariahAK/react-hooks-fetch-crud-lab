import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  // Function to handle deletion of a question
  const handleDeleteQuestion = (id) => {
    // Filter out the deleted question from the questions array
    const updatedQuestions = questions.filter(question => question.id !== id);
    setQuestions(updatedQuestions);
  };

  // Function to handle updating the correct answer for a question
  const handleUpdateCorrectAnswer = (id, newCorrectIndex) => {
    // Update the correctIndex of the question in the questions array
    const updatedQuestions = questions.map(question => {
      if (question.id === id) {
        return { ...question, correctIndex: newCorrectIndex };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  };

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDeleteQuestion={handleDeleteQuestion} // Pass onDeleteQuestion function as prop
            onUpdateCorrectAnswer={handleUpdateCorrectAnswer} // Pass onUpdateCorrectAnswer function as prop
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
