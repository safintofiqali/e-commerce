/* IMPORT : STYLES */
import "./authentication.styles.scss";
/* IMPORT : COMPONENTS */
import SignUpForm from "../../components/sign-up-form/SignUpForm.comp";
import SignInForm from "../../components/sing-in-form/SignInForm.comp";

/* RENDER COMPONENT - STARTS */
const Authentication = () => {
  // RETURN ELEMENTS - AREA
  return (
    <div>
      <h1>Authentication Page</h1>
      <div className="auth-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;
