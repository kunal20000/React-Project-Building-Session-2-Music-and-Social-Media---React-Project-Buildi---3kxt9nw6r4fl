import React from "react";
import "./navbar.css";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import PinterestIcon from "@mui/icons-material/Pinterest";
import HeadsetIcon from "@mui/icons-material/Headset";
const Navbar = () => {
  return (
    <nav className="navbar-container">
      <QueueMusicIcon />
      <strong>Newton School</strong>

      <ul className="nav-links">
        <li className="link-item">
          <HomeSharpIcon />
          <span>Home</span>
        </li>
        <li className="link-item">
          <PinterestIcon />
          <span>Social</span>
        </li>
        <li className="link-item">
          <HeadsetIcon />
          <span>LIBRARY</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
