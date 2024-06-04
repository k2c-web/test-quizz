import { reducer } from "./assets/utils/reducer";
import { useReducer } from "react";
import "./App.css";

import { getGameScore } from "./assets/utils/utils";

import CbtwLogo from "./assets/cbtw.svg";

import { LastScreen } from "./Components/LastScreen/LastScreen";
import { FirstScreen } from "./Components/FirstScreen/FirstScreen";
import { Form } from "./Components/Form/Form";
import { questions } from "./questions";
import { Questions } from "./Components/Questions/Questions";

const initialState = {
  apiUrl: "http://51.178.43.243:8080/players",
  step: 0,
  score: getGameScore().score,
  numberOfQuestions: questions.length,
  correctCount: 0,
  user: {
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    partScore: getGameScore().score,
    finalScore: 0,
    partCode: getGameScore().code,
  },
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const isFormStep = state.step === 1;
  const isFirstStep = state.step === 0;
  const isLastStep = state.step === state.numberOfQuestions + 2;
  const isQuestionStep = !isFormStep && !isFirstStep && !isLastStep;

  const start = () => dispatch({ type: "incrementStep" });

  const containerClassname = `main_container logo_container ${
    isQuestionStep ? "" : "with_border_bottom"
  }`;

  if (!(state.user.partCode && state.user.partScore))
    return <h1>Error s & c parameters are missing</h1>;

  return (
    <>
      <div className={containerClassname}>
        <img src={CbtwLogo} alt="logo cbtw" />
      </div>
      {(isFirstStep && <FirstScreen start={start} state={state} />) ||
        (isFormStep && <Form dispatch={dispatch} />) ||
        (isLastStep && <LastScreen state={state} />) || (
          <div className="main_container">
            <Questions
              dispatch={dispatch}
              questions={questions}
              state={state}
            />
          </div>
        )}
    </>
  );
}

export default App;
