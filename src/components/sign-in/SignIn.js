import React, { useState } from "react";
import "./signIn.scss";
import FormInput from "../form-input/FormInput";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name == "email") {
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
          required="true"
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          required
        />
        {/* <label>Password</label> */}
        <FormInput
          label="Password"
          required="true"
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          required
        />
        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
};

export default SignIn;
