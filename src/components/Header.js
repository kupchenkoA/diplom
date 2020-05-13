import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header__block">DECLINATION SYSTEM </div>
        <div>
          {" "}
          <Link to="/">Find word</Link>
          <Link to="/type">By Type</Link>
        </div>
      </div>
    );
  }
}

export default Header;
