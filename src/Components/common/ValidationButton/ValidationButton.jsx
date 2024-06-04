import "./ValidationButton.css";

export const ValidationButton = ({ disabled, onClick }) => {
  return (
    <button className="main_cta" disabled={disabled} onClick={onClick}>
      <span className="main_cta_label">Valider</span>
    </button>
  );
};
