import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up/SignUpForm.comp";
import SignInForm from "../../components/sign-in/SingIn.comp";
const Authentication = () => {
  return (
    <div>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
