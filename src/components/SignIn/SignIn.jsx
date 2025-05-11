import React, { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';

const SignIn = ({ loadUser, onRouteChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    fetch("https://eye-know-api.onrender.com/signIn", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(user => {
      if (user.id) {
        loadUser(user);
        onRouteChange("home");
      }
    });
  };

  const fields = [
    { label: "Email", type: "email", name: "email-address", onChange: e => setEmail(e.target.value) },
    { label: "Password", type: "password", name: "password", onChange: e => setPassword(e.target.value) }
  ];

  return (
    <AuthForm
      title="Sign In"
      fields={fields}
      onSubmit={onSubmit}
      buttonText="Sign in"
      extraElement={
        <p onClick={() => onRouteChange("register")} className="f6 link dim black db pointer">
          Register
        </p>
      }
    />
  );
};

export default SignIn;
