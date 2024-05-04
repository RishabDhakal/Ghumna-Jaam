import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const link = [
    {
        name: "Booking",
        link: "booking",
      },
    {
      name: "Login",
      link: "login",
    },
  ];
  return (
    <>
      <div className="navbar">
        <Link to="">
          <div className="loader"><span className="g">G</span>humna <span>J</span>aam</div>
        </Link>
        <div className="link">
          {link.map(({ name, link }) => (
            <Link className="mrt" key={Math.random()} to={link}>
              {name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
