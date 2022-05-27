/* IMPORT STYLES */
import "./form-input.styles.scss";

/* RENDER COMPONENT */
const FormInput = ({ label, additionalProps }) => {
  // RETURN ELEMENTS - AREA
  return (
    <div className="group">
      <input {...additionalProps} className="form-input" />
      {label && <label className={`${additionalProps.value.length ? "shrink" : null} form-input-label`}>{label}</label>}
    </div>
  );
};

export default FormInput;
