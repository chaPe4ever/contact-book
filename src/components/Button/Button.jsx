import "./index.scss";

const Button = ({ iconTxt = "+" }) => {
  return (
    <button className="add-button">
      <span className="plus-icon">{iconTxt}</span>
    </button>
  );
};

export default Button;
