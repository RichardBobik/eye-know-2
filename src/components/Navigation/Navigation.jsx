import ProfileIcon from "../Profile/ProfileIcon";

const Navigation = ({ onRouteChange, isSignedIn, toggleModal }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      {isSignedIn ? (
        <>
          <ProfileIcon
            onRouteChange={onRouteChange}
            toggleModal={toggleModal}
          />
        </>
      ) : (
        <>
          <p
            onClick={() => onRouteChange("signIn")}
            className="f3 link dim black underline pa3 pointer"
          >
            Sign In
          </p>
          <p
            onClick={() => onRouteChange("register")}
            className="f3 link dim black underline pa3 pointer"
          >
            Register
          </p>
        </>
      )}
    </nav>
  );
};

export default Navigation;
