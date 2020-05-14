import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header__block">DECLINATION SYSTEM </div>
        <div>
          {" "}
          <Button variant="light" className="menu_btn">
            <Link to="/" className="menu_link">
              Find word
            </Link>
          </Button>
          <Button variant="light" className="menu_btn">
            {" "}
            <Link to="/type" className="menu_link">
              By Type
            </Link>
          </Button>
          <Button variant="light" className="menu_btn">
            <Link to="/group" className="menu_link">
              By Group
            </Link>
          </Button>
        </div>
      </div>
    );
  }
}

export default Header;
