import React, { useState } from "react";
import { auth, signInWithTwitter } from "../../firebase/firebase.utils";
import "./signIn.scss";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("error signing in, try again");
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };
  return (
    <div className="sign-in">
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        {/* <label>Email</label> */}
        <FormInput
          label="Email address"
          placeholder="example@domain.com"
          required={true}
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
        />
        {/* <label>Password</label> */}
        <FormInput
          label="Password"
          required={true}
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
        />
        <Button type="submit">Sign In</Button>
        <Button onClick={signInWithTwitter} theme="twitter">
          Sign In With Twitter
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
