import { useState, createContext, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  userAuth: null,
  setUserAuth: () => null,
});

const UserContextProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setUserAuth(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={{ userAuth, setUserAuth }}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
