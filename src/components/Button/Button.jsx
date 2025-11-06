import "./index.scss";

const Button = ({ iconTxt = "+", className = "", ...rest }) => {
  return (
    <button className={`add-button ${className}`} {...rest}>
      <span className="plus-icon">{iconTxt}</span>
    </button>
  );
};

export default Button;
