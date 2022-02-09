import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json"; // ../ -> means 1 directory up from where we are

function Question(props) {
  return <div>{props.question}</div>;
}

function App() {
  let currentQuestionNum = 0;

  return (
    <div className="app">
      Trivia!
      <Question question="Question goes here" />
    </div>
  );
}

export default App;
