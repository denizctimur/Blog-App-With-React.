import React from "react";
import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTANT</li>
          <li className="topListItem">WRİTE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://storage.ws.pho.to/s2/d4255f40e843a4908ae9e4a4f5dbd7519f1471e9_m.jpg"
          alt=""
        />
        <i className="fa-solid fa-magnifying-glass topSearchIcon"></i>
      </div>
    </div>
  );
}
