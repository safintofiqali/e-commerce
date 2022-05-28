/* IMPORT STYLES */
import "./button.styles.scss";
/* DECLARE VARIABLES/DATA */
const BUTTON_TYPES = {
  google: "google-sign-in",
  inverted: "inverted",
};
/* RENDER COMPONENT */
const Button = ({ children, buttonType, ...otherProps }) => {
  // RETURN ELEMENTS - AREA
  return (
    <button {...otherProps} className={`button-container ${BUTTON_TYPES[buttonType]}`}>
      {children}
    </button>
  );
};
export default Button;
