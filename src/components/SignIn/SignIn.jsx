import React, { useState } from "react";
import AuthForm from "../AuthForm/AuthForm";

const SignIn = ({ loadUser, onRouteChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const saveAuthTokenInSession = (token) => {
    window.sessionStorage.setItem("token", token);
  };

  const onSubmit = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/signIn`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.userId && data.success === "true") {
        saveAuthTokenInSession(data.token);

        const profileRes = await fetch(
          `${import.meta.env.VITE_API_URL}/profile/${data.userId}`,
          {
            method: "get",
            headers: {
              "Content-Type": "application/json",
              Authorization: data.token,
            },
          }
        );

        const user = await profileRes.json();

        if (user && user.email) {
          loadUser(user);
          onRouteChange("home");
        }
      } else {
        console.log("Sign-in failed:", data);
      }
    } catch (err) {
      console.error("Sign-in error:", err);
    }
  };

  const fields = [
    {
      label: "Email",
      type: "email",
      name: "email-address",
      onChange: (e) => setEmail(e.target.value),
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      onChange: (e) => setPassword(e.target.value),
    },
  ];

  return (
    <AuthForm
      title="Sign In"
      fields={fields}
      onSubmit={onSubmit}
      buttonText="Sign in"
      extraElement={
        <p
          onClick={() => onRouteChange("register")}
          className="f6 link dim black db pointer"
        >
          Register
        </p>
      }
    />
  );
};

export default SignIn;
