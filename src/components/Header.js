import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header__block d-flex">DECLINATION SYSTEM 
        
          {" "}
          <button variant="light" className="menu_btn">
            <Link to="/" className=" menu_link__btn">
              Find word
            </Link>
          </button>
          <button variant="light" className="menu_btn">
            {" "}
            <Link to="/type" className=" menu_link__btn">
              By Type
            </Link>
          </button>
          <button variant="light" className="menu_btn">
            <Link to="/group" className=" menu_link__btn">
              By Group
            </Link>
          </button>
        
        </div>
        
      </div>
    );
  }
}

export default Header;
