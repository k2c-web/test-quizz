import { useState } from "react";
import "./Card.css";
import { ValidationButton } from "../../common/ValidationButton/ValidationButton";

const LETTERS = ["A", "B", "C", "D"];

export const Card = ({ title, id, value, responses, dispatch }) => {
  const [selected, setSelected] = useState({});
  const selectResponse = (resp) => setSelected(resp);
  const validateCard = () => {
    dispatch({
      type: "incrementScore",
      payload: btoa(selected.text) === id ? value ?? 10 : 0,
    });
  };

  return (
    <div className="card_root">
      <h2 className="main_title">{title}</h2>
      <ul>
        {responses.map((resp, index) => (
          <li
            className={
              resp.text === selected.text
                ? "response_box selected"
                : "response_box"
            }
            onClick={() => selectResponse(resp)}
            key={index}
          >
            <div className="response_text">
              <div className="letter">{`${LETTERS[index]} .`}</div>
              <div>{resp.text}</div>
            </div>
            <div className="fake_radio_container">
              <div className="fake_radio"></div>
            </div>
          </li>
        ))}
      </ul>
      <ValidationButton onClick={validateCard} disabled={!selected.text} />
    </div>
  );
};
