import { createContext, useEffect, useState, useMemo, useContext } from "react";

const authContext = createContext(null);

export const useAuthContext = () => useContext(authContext);

export const AuthContextComponent = (props) => {
  const [isSignupPopup, setIsSignupPopup] = useState(false);
  const [isLoginPopup, setIsLoginPopup] = useState(false);
  const [isAuthPopup, setIsAuthPopup] = useState(false);
  const [navbarUsername, setNavbarUsername] = useState(null);

  const value = {
    isSignupPopup,
    setIsSignupPopup,
    isAuthPopup,
    setIsAuthPopup,
    isLoginPopup,
    setIsLoginPopup,
    navbarUsername,
    setNavbarUsername,
  };

  return (
    <authContext.Provider value={value}>{props.children}</authContext.Provider>
  );
};
