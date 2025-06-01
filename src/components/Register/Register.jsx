import React, { useState } from "react";
import AuthForm from "../AuthForm/AuthForm";

const Register = ({ loadUser, onRouteChange }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    fetch(`${import.meta.env.VITE_API_URL}/register`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.id) {
          loadUser(user);
          onRouteChange("home");
        }
      });
  };

  const fields = [
    {
      label: "Name",
      type: "text",
      name: "name",
      onChange: (e) => setName(e.target.value),
      helper: "Enter your user name.",
    },
    {
      label: "Email",
      type: "email",
      name: "email-address",
      onChange: (e) => setEmail(e.target.value),
      helper: "Format: username@example.com",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      onChange: (e) => setPassword(e.target.value),
      helper: "Minimum 8 characters.",
    },
  ];

  return (
    <AuthForm
      title="Register"
      fields={fields}
      onSubmit={onSubmit}
      buttonText="Register"
    />
  );
};

export default Register;
