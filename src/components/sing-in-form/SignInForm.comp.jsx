/* IMPORT LIBRARIES */
import { useState } from "react";

/* IMPORT COMPONENTS */
import FormInput from "../form-input/FormInput.comp";
import Button from "../button/Button.comp";

/* IMPORT : UTILITIES */
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

/* DECLARE VARIABLES/DATA */
const defaultFormFields = {
  email: "",
  password: "",
};
/* RENDER COMPONENT - STARTS */
const SignInForm = () => {
  // SIGN IN WITH GOOGLE - FUNCTION
  const googlePopupSignIn = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(name, value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err);
    }
  };

  // RETURN ELEMENTS - AREA
  return (
    <div>
      <h1>Already have an account ?</h1>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" additionalProps={{ type: "email", name: "email", value: email, onChange: handleInputChange, required: true }} />
        <FormInput label="Password" additionalProps={{ type: "password", name: "password", value: password, onChange: handleInputChange, required: true }} />
        <Button type="submit">Sign In</Button>
      </form>

      <Button onClick={googlePopupSignIn} buttonType="google">
        Sign In With Google
      </Button>
    </div>
  );
};
export default SignInForm;
