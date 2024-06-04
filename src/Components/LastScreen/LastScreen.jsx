import threeQuarter from "./../../assets/Icons/three-quarter.svg";
import trophy from "./../../assets/Icons/trophy.svg";
import like from "./../../assets/Icons/like.svg";
import linkedin from "./../../assets/Icons/linkedin.svg";
import envelop from "./../../assets/Icons/envelop.svg";
import arrowRight from "./../../assets/Icons/arrow-right.svg";

import { InfoBox } from "../common/InfoBox/InfoxBox";
import "./LastScreen.css";
import { useEffect } from "react";

const ContactTabs = () => {
  return (
    <div className="contact_tab_root">
      <div className="contact_tab">
        Nous contacter
        <a
          href="https://fr.linkedin.com/company/collaboration-betters-the-world/"
          target="_blank"
        >
          <img src={linkedin} alt="page linkedin cbtw" />
        </a>
        <a
          href="https://collaborationbetterstheworld.com/contact/"
          target="_blank"
        >
          <img src={envelop} alt="contacter cbtw" />
        </a>
      </div>
      <div className="contact_tab discover">
        <a
          href="https://collaborationbetterstheworld.com/about/"
          target="_blank"
        >
          Découvrir CBTW
          <img src={arrowRight} alt="découvrir cbtw" />
        </a>
      </div>
    </div>
  );
};

export const LastScreen = ({ state }) => {
  useEffect(() => {
    if (state.user.firstname && state.score) {
      const requestPayload = {
        ...state.user,
        finalScore: state.score,
      };

      fetch(state.apiUrl, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestPayload),
      })
        .then((res) => res.json())
        .then((res) => console.log("Post Request Response => ", res));
    }
  }, [state]);

  return (
    <div className="main_container last_screen_section">
      <h1 className="main_title">Bravo !</h1>
      <InfoBox label="score" imgSrc={threeQuarter}>
        <span className="count">{state.correctCount}</span>
        <small>/ {state.numberOfQuestions}</small>
      </InfoBox>
      <InfoBox label="Bonus gagnés" imgSrc={like}>
        <span className="count">{`+ ${state.correctCount * 10}`}</span>
        <small>Pts</small>
      </InfoBox>
      <InfoBox label="Total gagnés" imgSrc={trophy}>
        <span className="count">{state.score}</span>
        <small>Pts</small>
      </InfoBox>
      <ContactTabs />
    </div>
  );
};
