import "./InfoBox.css";

export const InfoBox = ({ label, imgSrc, children, small, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={small ? "infobox_root small" : "infobox_root"}
    >
      <div className="number">{children}</div>
      <div className="icon_label">
        <img src={imgSrc} /> {label}
      </div>
    </div>
  );
};
