import React from "react";
import "./signInSignUp.scss";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

const SignInSignUp = () => {
  return (
    <div className="SignInSignUp">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
