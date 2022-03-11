import React from "react";

function Question({
  quesNo,
  question,
  onChange,
  option1,
  option2,
  option3,
  option4,
}) {
  return (
    <div className="mt-5">
      <p className="text-4xl">{question}</p>

      <div className="flex items-center mt-3">
        <div className="flex items-center w-60 text-white px-4 bg-slate-600 border-2 border-slate-600 rounded-2xl">
          <input
            className="cursor-pointer"
            type="radio"
            id={quesNo + "a"}
            name={quesNo}
            value={option1}
            onChange={onChange}
          />
          <label htmlFor={quesNo + "a"} className="cursor-pointer m-3 text-2xl">
            {option1}
          </label>
        </div>
      </div>

      <div className="flex items-center mt-3">
        <div className="flex items-center w-60 text-white px-4 bg-slate-600 border-2 border-slate-600 rounded-2xl">
          <input
            className="cursor-pointer"
            type="radio"
            id={quesNo + "b"}
            name={quesNo}
            value={option2}
            onChange={onChange}
          />
          <label htmlFor={quesNo + "b"} className="cursor-pointer m-3 text-2xl">
            {option2}
          </label>
        </div>
      </div>
      <div className="flex items-center mt-3">
        <div className="flex items-center w-60 text-white px-4 bg-slate-600 border-2 border-slate-600 rounded-2xl">
          <input
            className="cursor-pointer"
            type="radio"
            id={quesNo + "a"}
            name={quesNo}
            value={option3}
            onChange={onChange}
          />
          <label htmlFor={quesNo + "c"} className="cursor-pointer m-3 text-2xl">
            {option3}
          </label>
        </div>
      </div>
      <div className="flex items-center mt-3">
        <div className="flex items-center w-60 text-white px-4 bg-slate-600 border-2 border-slate-600 rounded-2xl">
          <input
            className="cursor-pointer"
            type="radio"
            id={quesNo + "d"}
            name={quesNo}
            value={option4}
            onChange={onChange}
          />
          <label htmlFor={quesNo + "d"} className="cursor-pointer m-3 text-2xl">
            {option4}
          </label>
        </div>
      </div>
    </div>
  );
}

export default Question;
