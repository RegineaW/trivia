import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json"; // ../ -> means 1 directory up from where we are

function Question(props) {
  let choices = data[0].question.choices;

  return (
    <div>
      {props.question}
      {/* <Answer answer={data[0].question.choices[0]}/> */}
      {choices.map((element) => (
        <Answer answer={element} />
      ))}
    </div>
  );
}

function NextQuestion(props) {
  return <button type="button">Next Question</button>;
}

function Answer(props) {
  return <div>{props.answer}</div>;
}

function App() {
  let currentQuestionNum = 0;

  return (
    <div className="app">
      <h1>Trivia!</h1>
      <Question question={data[0].question.text} />
      <NextQuestion />
    </div>
  );
}

export default App;
