/* IMPORT : UTILITIES */
import { auth, signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

/* RENDER COMPONENT - STARTS */
const SignInForm = () => {
  // SIGN IN WITH GOOGLE - FUNCTION
  const googlePopupSignIn = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  // RETURN ELEMENTS - AREA
  return (
    <div>
      <h1>Already have an account ?</h1>
      <button onClick={googlePopupSignIn}>Sign In With Google Popup</button>
    </div>
  );
};
export default SignInForm;
