import React, { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import Navigation from "../components/Navigation/Navigation";
import SignIn from "../components/SignIn/SignIn";
import Register from "../components/Register/Register";
import Logo from "../components/Logo/Logo";
import Rank from "../components/Rank/Rank";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import ImagePreview from "../components/ImagePreview/ImagePreview";
import Card from "../components/Card/Card";
import Modal from "../components/Modal/Modal";
import Profile from "../components/Profile/Profile";
import "./App.css";

const initialUserState = {
  id: "",
  name: "",
  email: "",
  entries: 0,
  joined: "",
  age: "",
  pet: "",
};

const App = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [route, setRoute] = useState("signIn");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [cardData, setCardData] = useState(null);
  const [user, setUser] = useState(initialUserState);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    console.log("Stored token:", token);
    if (token) {
      fetch(`${import.meta.env.VITE_API_URL}/signIn`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Token-based sign-in response:", data);
          if (data.id) {
            fetch(`${import.meta.env.VITE_API_URL}/profile/${data.id}`, {
              method: "get",
              headers: {
                "Content-Type": "application/json",
                Authorization: token,
              },
            })
              .then((resp) => resp.json())
              .then((user) => {
                if (user && user.email) {
                  console.log(user);
                  loadUser(user);
                  onRouteChange("home");
                }
              });
          }
        })
        .catch(console.log);
    }
  }, []); // empty dependency array = run only once on mount

  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
    });
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const onPictureSubmit = () => {
    setHasSubmitted(true);
    setImageUrl(input);
    setIsSpinning(true);

    fetch(`${import.meta.env.VITE_API_URL}/imageurl`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: window.sessionStorage.getItem("token"),
      },
      body: JSON.stringify({ imageUrl: input }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Clarifai response:", data);

        const concepts = data.outputs?.[0]?.data?.concepts || [];
        const formattedLines = concepts
          .slice(0, 10)
          .map(
            (concept) =>
              `${concept.name} (${(concept.value * 100).toFixed(1)}%)`
          );

        setCardData({ lines: formattedLines });

        setTimeout(() => setIsSpinning(false), 2000);

        fetch(`${import.meta.env.VITE_API_URL}/image`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: window.sessionStorage.getItem("token"),
          },
          body: JSON.stringify({ id: user.id }),
        })
          .then((res) => res.json())
          .then((count) => {
            setUser((prevUser) => ({ ...prevUser, entries: count }));
          })
          .catch(console.log);
      })
      .catch((err) => console.log("Error processing image:", err));
  };

  const onRouteChange = (route) => {
    if (route === "signOut") {
      setInput("");
      setImageUrl("");
      setCardData(null);
      setUser(initialUserState);
      setIsSignedIn(false);
      setRoute("signIn");
    } else if (route === "home") {
      setIsSignedIn(true);
      setRoute("home");
    } else {
      setRoute(route);
    }
  };

  const toggleModal = () => {
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} />
      <Navigation
        isSignedIn={isSignedIn}
        onRouteChange={onRouteChange}
        toggleModal={toggleModal}
      />
      {isProfileOpen && (
        <Modal>
          <Profile
            isProfileOpen={isProfileOpen}
            toggleModal={toggleModal}
            loadUser={loadUser}
            user={user}
          />
        </Modal>
      )}
      {route === "home" ? (
        <div>
          <Logo />
          <Rank name={user.name} entries={user.entries} />
          <ImageLinkForm
            onInputChange={onInputChange}
            onButtonSubmit={onPictureSubmit}
          />
          <div className="card-image-container">
            {cardData && <Card data={cardData} isSpinning={isSpinning} />}
            <div className="image-preview-wrapper">
              <ImagePreview imageUrl={imageUrl} hasSubmitted={hasSubmitted} />
            </div>
          </div>
        </div>
      ) : route === "signIn" ? (
        <SignIn loadUser={loadUser} onRouteChange={onRouteChange} />
      ) : (
        <Register loadUser={loadUser} onRouteChange={onRouteChange} />
      )}
    </div>
  );
};

export default App;
