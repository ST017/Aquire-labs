/* import React from 'react';
import './Navbar.css';
import RaisaLogo from "../../Images/RaisaLogo.png"

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo"><img src={RaisaLogo} alt='raisa-logo'/></div>
      <nav>
        <ul>
          <img src=''/>
          <li><a href="#">Discover</a></li>
          <li><a href="#">Inbox</a></li>
          <li><a href="#">Requests</a></li>
          <li><a href="#">Saved</a></li>
          <li><a href="#">Notifications</a></li>
        </ul>
      </nav>
      <button className="logout-btn">Logout</button>
    </header>
  
  );
  
};

export default Navbar;
 */
import React from "react";
import "./Navbar.css";
import RaisaLogo from "../../Images/RaisaLogo.png";
import dis from "../../Images/svgs/discover.svg";
import inb from "../../Images/svgs/inbox 1.svg";
import req from "../../Images/svgs/request.svg";
import sav from "../../Images/svgs/save-instagram 1.svg";
import noti from "../../Images/svgs/notification 1.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <header className="navbar">

    //   <div className="logo"><img src={RaisaLogo} alt='raisa-logo'/></div>
    //   <nav  className="headermain">
    //                 <ul>
    //                 <li  className="Discover"> <img src="" alt="discover"/> <a href="#">Discover</a></li>
    //                 <li  className="Inbox"> <img src="" alt="inbox"/><a href="#">Inbox</a></li>
    //                 <li  className="Request"> <img src="" alt="request"/><a href="#">Request</a></li>
    //                 <li  className="Saved"> <img src="" alt="saved"/><a href="#">Saved</a></li>
    //                 <li  className="Notifications"> <img src="" alt="notification"/><a href="#">Notifications</a></li>
    //                 </ul>
    //                 </nav>

    //   <div className="logoutbtn">
    //   <button className="logout-btn">Logout</button></div>
    // </header>
    <nav className="container">
      <div className="headercontainer">
        <div className="frame1">
          <div className="Logo">
            <img src={RaisaLogo} alt="logo" />
          </div>
          <div className="headermain">
            <ul className="header-ul">
              <li className="Discover-l">
                
                <img src={dis} alt="discover" /> <span>Discover</span>
              </li>
              <li className="Inbox-l">
               
                <img src={inb} alt="inbox" />
                <span>Inbox</span>
              </li>
              <li className="Request-l">
               
               <img src={req} alt="request" />
                <Link to="/requestpage">
                  <span>Request</span>
                </Link>
              </li>
              <li className="Saved-l">
               
                <img src={sav} alt="saved" />
                <span>Saved</span>
              </li>
              <li className="Notifications-l">
                
                <img src={noti} alt="notification" />
                <span>Notifications</span>
              </li>                
            </ul>
          </div>
        </div>
        <div className="frame2">
          <div className="logout">
            <button className="logout-btn">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
