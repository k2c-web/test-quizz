import "./FirstScreen.css";
import clockCircle from "./../../assets/Icons/clock-circle.svg";
import messageQuestion from "./../../assets/Icons/message-question.svg";
import { InfoBox } from "../common/InfoBox/InfoxBox";
import { ValidationButton } from "../common/ValidationButton/ValidationButton";

export const FirstScreen = ({ state, start }) => {
  return (
    <div className="main_container intro_section">
      <h1 className="main_title">Merci de participer à notre jeu !</h1>
      <section>
        Vous avez <span className="current_score">{state.score}</span> points 🎉
      </section>
      <p>
        Validez votre score en participant à notre quiz (jusqu'à 50 pts bonus
        supplémentaires).
      </p>
      <p>Des lots sont à gagner</p>
      <div className="intro_infos">
        <InfoBox
          small
          label="questions"
          imgSrc={messageQuestion}
          onClick={start}
        >
          5
        </InfoBox>
        <InfoBox small label="minutes" imgSrc={clockCircle} onClick={start}>
          2
        </InfoBox>
      </div>
      <ValidationButton onClick={start} />
    </div>
  );
};
