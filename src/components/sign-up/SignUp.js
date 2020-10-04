import React, { useState } from "react";
import "./signUp.scss";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      let displayName = firstname;
      await createUserProfileDocument(user, {
        displayName,
        firstname,
        lastname,
      });
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.log("error creating user", error.message);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case "firstname":
        setFirstname(value);
        break;
      case "lastname":
        setLastname(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
    }
  };
  return (
    <div className="sign-up">
      <h2>New customer</h2>
      <form onSubmit={handleSubmit}>
        {/* <label>Email</label> */}
        <FormInput
          label="First name"
          required={true}
          type="text"
          name="firstname"
          value={firstname}
          handleChange={handleChange}
        />
        <FormInput
          label="Last name"
          required={true}
          type="text"
          name="lastname"
          value={lastname}
          handleChange={handleChange}
        />
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
        <FormInput
          label="Confirm password"
          required={true}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
        />
        <Button type="submit">Create an account</Button>
        {/* <Button theme="twitter">Sign In With Twitter</Button> */}
      </form>
    </div>
  );
};

export default SignUp;
