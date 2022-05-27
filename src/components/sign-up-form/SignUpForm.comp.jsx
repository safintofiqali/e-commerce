/* IMPORT LIBRARIES */
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

/* IMPORT COMPONENTS */
import FormInput from "../form-input/FormInput.comp";

/* DECLARE VARIABLES/DATA */
const defaultFormFields = { displayName: "", email: "", password: "", confirmPassword: "" };

/* RENDER COMPONENT - STARTS */
const SignUpForm = () => {
  /* DECLARE VARIABLES/DATA */
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // FUNCTIONS
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords fo not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      const userDocRef = await createUserDocumentFromAuth(user, { displayName });
    } catch (err) {
      alert(err);
    }
    resetFormFields();
  };
  // RETURN ELEMENTS - AREA
  return (
    <div>
      <h1>You don't have an account ?</h1>

      <form onSubmit={handleSubmit}>
        <FormInput label="Display Name" additionalProps={{ type: "text", name: "displayName", value: displayName, onChange: handleInputChange, required: true }} />

        <FormInput label="Email" additionalProps={{ type: "email", name: "email", value: email, onChange: handleInputChange, required: true }} />

        <FormInput label="Password" additionalProps={{ type: "password", name: "password", value: password, onChange: handleInputChange, required: true }} />

        <FormInput label="Confirm Password" additionalProps={{ type: "password", name: "confirmPassword", value: confirmPassword, onChange: handleInputChange, required: true }} />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SignUpForm;
