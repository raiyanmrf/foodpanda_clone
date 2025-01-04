import { useAuthContext } from "../hooks/AuthContext";

const WelcomeLogIn = () => {
  const {
    isSignupPopup,
    setIsSignupPopup,
    isAuthPopup,
    setIsAuthPopup,
    isLoginPopup,
    setIsLoginPopup,
  } = useAuthContext();
  return (
    <>
      <div className="signin-welcome">
        <h2>Welcome!</h2>
        <p>Sign up or log in to continue</p>
      </div>

      <div className="signin-buttons">
        <button className="signin-fb">Continue with Facebook</button>
        <button className="signin-google">Continue with Google</button>
        <button className="signin-apple">Continue with Apple</button>
        <p>or</p>
        <button
          className="btn btn-pink btn-moderate btn-lg"
          onClick={(e) => {
            setIsAuthPopup(false);
            setIsLoginPopup(true);
          }}
        >
          Log in
        </button>
        <button
          className="btn btn-border btn-moderate btn-lg btn-white"
          onClick={(e) => {
            setIsAuthPopup(false);
            setIsSignupPopup(true);
          }}
        >
          Sign Up
        </button>
        <p className="signin-terms">
          By signing up, you agree to our
          <span>Terms and Conditions</span>
          and
          <span>Privacy Policy</span>.
        </p>
      </div>
    </>
  );
};

export default WelcomeLogIn;
