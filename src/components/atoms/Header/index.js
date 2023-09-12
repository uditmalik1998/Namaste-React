import { LOGO_URL } from "../../../utils/constants";
import { useState } from "react";
import { Link, to } from "react-router-dom";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav">
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to="/About">About Us</Link></li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            onClick={() => {
              setBtnText((prev) => (prev === "Logout" ? "Login" : "Logout"));
            }}
          >
            {btnText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
