import React, { useState } from "react";
import { questions } from "./data/questions";
import Question from "./pages/Question";
import Result from "./pages/Result";

function App() {
  const [isSubmit, setSubmit] = useState(false);
  const [selected, setSelected] = useState({
    q1: "",
    q2: "",
  });
  const [res, setRes] = useState("");
  const checkData = (e) => {
    e.preventDefault();
    //storing values in array
    let data = [];
    let Values = Object.values(selected);
    for (let value in Values) {
      data.push(Values[value]);
    }
    //Getting result
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].answer === data[i]) score += questions[i].marks;
    }
    setRes(score);
    setSubmit(true);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSelected({ ...selected, [name]: value });
  };
  return (
    <>
      {!isSubmit && (
        <div>
          <h1 className="text-6xl text-center mt-5">Welcome to</h1>
          <h1 className="text-8xl text-center mt-5">
            BUG <span className="bg-red-400 text-white">Heist</span>
          </h1>
          <form onSubmit={checkData} className="lg:px-56 md:px-32 px-20   mt-5">
            {questions.map((ques, key) => {
              return (
                <Question
                  key={key}
                  quesNo={ques.quesNo}
                  question={ques.question}
                  onChange={handleOnChange}
                  option1={ques.option1}
                  option2={ques.option2}
                  option3={ques.option3}
                  option4={ques.option4}
                />
              );
            })}
            <div className="mt-3 flex justify-center">
              <button className="bg-green-400 p-3 text-2xl text-white font-bold rounded-xl hover:text-green-400 hover:bg-white hover:border-green-400 hover:border-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
      {isSubmit && <Result score={res} />}
    </>
  );
}

export default App;
