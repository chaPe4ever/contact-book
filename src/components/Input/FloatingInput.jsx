import "./index.scss";

const FloatingInput = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  ...rest
}) => {
  return (
    <div className="floating-input">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        required={required}
        {...rest}
      />
      <label>{label}</label>
    </div>
  );
};

export default FloatingInput;
