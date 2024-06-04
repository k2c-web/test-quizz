import "./Form.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ValidationButton } from "../common/ValidationButton/ValidationButton";

export const Form = ({ dispatch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm({ mode: "onSubmit" });

  const onSubmit = (data) => {
    dispatch({ type: "updateUser", payload: data });
  };

  return (
    <div className="main_container form_container">
      <h1 className="main_title">
        Complétez vos informations pour continuer à jouer
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input_container">
          <input
            type="text"
            id="firstname"
            placeholder="Ex: Jean"
            {...register("firstname", {
              required: true,
              minLength: 2,
            })}
          />
          <label htmlFor="firstname">Prénom *</label>
        </div>
        <div className="input_container">
          <input
            id="nom"
            placeholder="Ex: Dupont"
            {...register("lastname", {
              required: true,
              minLength: 2,
            })}
          />
          <label htmlFor="lastname">Nom *</label>
        </div>
        <div className="input_container">
          <input
            type="email"
            id="email"
            placeholder="Ex: jdupont@cbtw.tech"
            {...register("email", {
              required: "Veuillez indiquer votre email",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              },
            })}
          />
          <label htmlFor="email">Email *</label>
        </div>
        <div className="input_container">
          <input
            type="phone"
            id="phoneNumber"
            placeholder="Ex: 0776236700"
            {...register("phoneNumber", {
              required: true,
              pattern: {
                value:
                  /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/,
              },
            })}
          />
          <label htmlFor="phoneNumber">Tél *</label>
        </div>
        <div className="footer_text">
          <a href="#" onClick={() => setIsModalOpen(true)}>
            Politique de confidentialité
          </a>
          <p>* Informations obligatoires</p>
        </div>
        <ValidationButton disabled={!isValid || !isDirty} />
      </form>

      {isModalOpen && (
        <div className="modal">
          <div className="modal_content">
            <div className="modal_header">
              <h3>Politique de confidentialité</h3>
              <span
                className="close_button"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </span>
            </div>
            <p>
              Les informations recueillies sur ce formulaire sont enregistrées
              dans un fichier informatisé par CBTW Lille dans le but d’un jeu
              concours et pourra être utilisé à des fins de recrutement. Les
              données sont conservées pendant une durée de 3 ans. Vous pouvez
              rectifier, effacer ou exercer votre droit à la limitation de vos
              données à tout moment.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
