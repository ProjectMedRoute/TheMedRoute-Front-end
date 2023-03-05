import React from "react";
import Logo from "./Logos.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" height="50px" />
      </div>
      <div className="logoname">
        <h1>The Med Route</h1>
        <h5>CARING BEYOND DRUGS</h5>
      </div>
      <input
        id="seaBar"
        type="text"
        title="Search for Medics and More"
        placeholder="Search for Medics and More"
        value=""
      ></input>

      <button id="serButton" type="submit">
        <img
          id="searchimg"
          width={25}
          height={25}
          src="https://www.clipartmax.com/png/small/15-150759_search-icon-search-icon-png-blue.png"
          alt=""
        />
      </button>
    </div>
  );
}

export default Navbar;
