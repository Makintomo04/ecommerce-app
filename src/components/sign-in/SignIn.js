import React, { useState } from "react";
import { auth, signInWithTwitter } from "../../firebase/firebase.utils";
import "./signIn.scss";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { withStyles } from "@material-ui/core/styles/withStyles";
import * as api from "../../api";
const styles = (theme) => ({
  accordion: {
    border: "none",
    boxShadow: "none",
  },
});
const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recoverEmail, setRecoverEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await api.signInUser({email, password})
      console.log(data)
      setEmail("");
      setPassword("");

    } catch (error) {
      console.log("Oops",error)
    }
    
    // try {
    //   const { user } = await auth.signInWithEmailAndPassword(email, password);
      // setEmail("");
      // setPassword("");
    // } catch (error) {
    //   console.log("error signing in, try again");
    // }
  };

  const handlePassReset = (e) => {
    auth
      .sendPasswordResetEmail(recoverEmail)
      .then(function () {
        // Email sent.
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "recoverEmail":
        setRecoverEmail(value);
        break;
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
      <Accordion style={{ boxShadow: "none" }}>
        <AccordionSummary style={{ padding: "0" }}>
          <span class="pass-reset">Forgot Password?</span>
        </AccordionSummary>
        <AccordionDetails style={{ paddingLeft: "0" }}>
          <div className="accord">
            <FormInput
              label="Email address"
              placeholder="example@domain.com"
              required={true}
              type="recoverEmail"
              name="recoverEmail"
              value={recoverEmail}
              handleChange={handleChange}
            />
            <Button type="button" onClick={handlePassReset}>
              Send Password Reset Email
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SignIn;
