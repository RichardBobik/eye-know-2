import React from "react";
import profilePic from "./avatar.png";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

class ProfileIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  };

  render() {
    return (
      <div className="pa4 tc" style={{ position: "relative" }}>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle
            tag="span"
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
          >
            <img src={profilePic} className="br-100 h3 w3 dib" alt="avatar" />
          </DropdownToggle>
          <DropdownMenu
            end
            className="profile-dropdown b--transparent shadow-5"
            style={{
              marginTop: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <DropdownItem onClick={this.props.toggleModal}>View</DropdownItem>
            <DropdownItem onClick={() => this.props.onRouteChange("signOut")}>
              Sign Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default ProfileIcon;
