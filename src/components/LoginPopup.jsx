import React, { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/AuthContext";
import { RxCross1 } from "react-icons/rx";

const LoginPopup = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const {
    isSignupPopup,
    setIsSignupPopup,
    isAuthPopup,
    setIsAuthPopup,
    isLoginPopup,
    setIsLoginPopup,
  } = useAuthContext();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://restaurant-server-ni4y.onrender.com/login",
        {
          email: userEmail,
          password: userPassword,
        }
      );
      if (response.data.success) {
        setIsLoginPopup(false);
        setIsAuthPopup(false);
        alert(response.data.message);
      } else if (!response.data.success) {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="popup-container">
      <div className="signin-container">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLoginPopup(false);
          }}
        >
          <RxCross1 />
        </button>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            handleLogin();
          }}
          className="signin-buttons"
        >
          <input
            onChange={(e) => {
              e.preventDefault();
              setUserEmail(e.target.value);
            }}
            type="email"
            value={userEmail}
            placeholder="Email"
          />

          <input
            onChange={(e) => {
              e.preventDefault();
              setUserPassword(e.target.value);
            }}
            type="password"
            value={userPassword}
            placeholder="password"
          />
          <button type="submit" className="btn btn-pink btn-moderate btn-lg">
            Log in
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPopup;
