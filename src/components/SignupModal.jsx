import React, { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/AuthContext";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const SignupModal = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { isSignupPopup, setIsSignupPopup, setIsLoginPopup } = useAuthContext();
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "https://restaurant-server-ni4y.onrender.com/register",
        {
          email: userEmail,
          username: userName,
          password: userPassword,
        }
      );
      console.log("response", response.data);
      if (response.data.success) {
        setIsSignupPopup(false);
        setIsLoginPopup(true);
      } else if (!response.data.success) {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert(
        error.response?.data?.message || "An error occurred during signup."
      );
    }
  };
  return (
    <section className="popup-container">
      <div className="signin-container">
        <h1>Please Sign Up</h1>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsSignupPopup(false);
          }}
        >
          <RxCross1 />
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            handleSignup();
          }}
          className="signin-buttons"
        >
          <input
            onChange={(e) => {
              e.preventDefault();
              setUserEmail(e.target.value);
            }}
            required
            type="email"
            value={userEmail}
            placeholder="Email"
          />
          <input
            onChange={(e) => {
              e.preventDefault();
              setUserName(e.target.value);
            }}
            required
            type="text"
            value={userName}
            placeholder="User Name"
          />
          <input
            onChange={(e) => {
              e.preventDefault();
              setUserPassword(e.target.value);
            }}
            required
            type="password"
            value={userPassword}
            placeholder="Password"
          />
          <button type="submit" className="btn btn-pink btn-moderate btn-lg">
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignupModal;
