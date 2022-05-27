import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../sign-up/SignUpForm.comp";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };
  return (
    <div>
      <h2>SignIn</h2>
      <button onClick={logGoogleUser}>Login</button>

      <SignUpForm />
    </div>
  );
};

export default SignIn;
