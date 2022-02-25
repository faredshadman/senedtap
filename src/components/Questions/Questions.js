import React from "react";
import "./Question.css";
import { useState } from "react";
const Questions = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="wrapper">
      <div className="question-wrapper">
        <div className="accordion">
          {data.map((item, i) => (
            <div key={i} className="accordion_item">
              <div className="accordion_title" onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div
                className={
                  selected === i
                    ? "accordion_content show"
                    : "accordion_content"
                }
              >
                <span>{item.answer}</span>
              </div>
              <hr style={{ width: "100%", margin: "0 auto" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    question:
      "Lorem augue proin gravida tristique interdum commodo lobortis augue?",
    answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
     reprehenderit, illo reiciendis eum quas a assumenda laudantium
    doloribus officia provident.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
    reprehenderit, illo reiciendis eum quas a assumenda laudantium
   doloribus officia provident?`,
  },
  {
    question:
      "Lorem augue proin gravida tristique interdum commodo Lor interdum commodo lobortis augue?lobortis augue?",
    answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
     reprehenderit, illo reiciendis eum quas a assumenda laudantium
    doloribus officia provident.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
    reprehenderit, illo reiciendis eum quas a assumenda laudantium
   doloribus officia provident?`,
  },
  {
    question: "Interdum commodo lobortis augue?",
    answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
     reprehenderit, illo reiciendis eum quas a assumenda laudantium
    doloribus officia provident.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
    reprehenderit, illo reiciendis eum quas a assumenda laudantium
   doloribus officia provident?`,
  },
  {
    question:
      "Lorem augue proin gravida tristique interdum commodo lobortis augue?",
    answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
     reprehenderit, illo reiciendis eum quas a assumenda laudantium
    doloribus officia provident.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
    reprehenderit, illo reiciendis eum quas a assumenda laudantium
   doloribus officia provident?`,
  },
  {
    question:
      "Lorem augue proin gravida augue proin gravida tristique interdum commodo lobortis augue?lobortis augue?",
    answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
     reprehenderit, illo reiciendis eum quas a assumenda laudantium
    doloribus officia provident.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
    reprehenderit, illo reiciendis eum quas a assumenda laudantium
   doloribus officia provident?`,
  },
  {
    question:
      "Lorem augue proin gr augue proin gravida tristique interdum commodo lobortis augue? lobortis augue?",
    answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
     reprehenderit, illo reiciendis eum quas a assumenda laudantium
    doloribus officia provident.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
    reprehenderit, illo reiciendis eum quas a assumenda laudantium
   doloribus officia provident?`,
  },
  {
    question: "Interdum commodo lobortis augue?",
    answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
     reprehenderit, illo reiciendis eum quas a assumenda laudantium
    doloribus officia provident.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
    reprehenderit, illo reiciendis eum quas a assumenda laudantium
   doloribus officia provident?`,
  },
];

export default Questions;
