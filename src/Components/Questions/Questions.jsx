import "./Questions.css";
import { Card } from "./Card/Card";
import { useEffect, useRef } from "react";

export const Questions = ({ state, questions, dispatch }) => {
  const progressBarRef = useRef();
  useEffect(() => {
    const percentage = ((state.step - 1) / (state.numberOfQuestions + 1)) * 100;
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${percentage}%`;
    }
  }, [state.numberOfQuestions, state.step]);

  return (
    <section className="cards_section">
      <div className="progress_bar">
        <div ref={progressBarRef} className="progress_bar_track"></div>
      </div>
      <h1 className="main_title">Question {state.step - 1}</h1>
      <div>
        {questions.map(
          (question, index) =>
            index === state.step - 2 && (
              <Card key={index} {...question} dispatch={dispatch} />
            )
        )}
      </div>
    </section>
  );
};
