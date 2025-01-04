import { useEffect, useRef, useState } from "react";
import {
  backwardIcon,
  cancelIcon,
  dropIcon,
  envelopeIcon,
} from "../assets/svg";
import WelcomeLogIn from "./WelcomeLogIn";
import useIsActive from "../hooks/useIsActive";
import { useAuthContext } from "../hooks/AuthContext";

const SignIn = () => {
  // const [isEmailInput, handleIsEmailInput] = useIsActive();
  //const [isVerifyEmail, handleIsVerifyEmail] = useIsActive();

  const { isAuthPopup, setIsAuthPopup } = useAuthContext();

  return (
    <section className="signin">
      <div className="signin-container">
        {/* <div
            className="signin-backward"
          
          >
            <img src={backwardIcon} alt="<" />
          </div> */}

        <div
          className="signin-cancel"
          onClick={(e) => {
            e.stopPropagation();
            setIsAuthPopup(false);
          }}
        >
          <img src={cancelIcon} alt="X" />
        </div>

        <WelcomeLogIn />

        {/* {isEmailInput && (
          <>
            <div className="signin-welcome">
              <img src={envelopeIcon} alt="" />
              <h2>Whats's your email?</h2>
              <p>We'll check if you have an account</p>
            </div>
            <form
              className="signin-buttons"
              onSubmit={(e) => {
                e.preventDefault();
                handleIsEmailInput();
              }}
            >
              <input name="email" placeholder="Email" type="text" />
              <label className="email-placeholder ">Email</label>
              <button
                type="submit"
                className="btn btn-pink btn-moderate btn-lg"
              >
                Continue
              </button>
            </form>{" "}
          </>
        )} */}

        {/* {isVerifyEmail && (
          <> */}
        {/* <div className="signin-welcome">
              <img src={envelopeIcon} alt="" />
              <h2>Verify your email address to get started</h2>
              <p style={{ fontSize: "11px" }}>
                This helps us mitigate fraud and keep your personal data safe
              </p>
            </div>

            <div className="signin-buttons">
              <button className="btn btn-pink btn-moderate btn-lg">
                Send Verification Email
              </button> */}

        {/* <button 
    className='btn  btn-moderate btn-lg'>Resend in {count}s</button>
  
  
  <button  className='btn btn-pink btn-moderate btn-lg'>
    <div className="dot-container">
    
    <div className="dot"> </div>
    <div className="dot"> </div>
    <div className="dot"> </div>
    
    </div>
    
    </button> */}
        {/* </div> */}
        {/* </>
        )} */}
      </div>
    </section>
  );
};

export default SignIn;
