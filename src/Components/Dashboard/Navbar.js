/* import React from 'react';
import './Navbar.css';
import RaisaLogo from "../../Images/RaisaLogo.png"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo"><img src={RaisaLogo} alt='raisa-logo'/></div>
      <nav>
        <ul>
          <img src=''/>
          <Link to="/dashboard"><li><a>Discover</a></li> </Link>
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
import React, { useState } from 'react';
import './Navbar.css';
import RaisaLogo from "../../Images/RaisaLogo.png"
import dis from '../../Images/discover.png'
import inb from '../../Images/inbox.png'
import req from '../../Images/request.png'
import sav from '../../Images/save.png'
import noti from '../../Images/notification.png'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
 
const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Handle mouse enter and leave for hover state
  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  const navigate = useNavigate(); // To programmatically navigate after logout
 
  const handleLogout = () => {
    const auth = getAuth(); // Get the current authentication instance
    signOut(auth)
      .then(() => {
        // Sign-out successful, redirect user to login page
        navigate('/login'); // Redirecting to login page after logout
      })
      .catch((error) => {
        // An error happened during logout
        console.error('Logout Error:', error);
      });
  };
  return (
   
    <nav className="container">
      <div className="headercontainer">
      <div className="frame1">
     
            <img  className="RaisaLogoimg"src={RaisaLogo} alt="logo" />
            <div className="headermain">
            {/* <ul className="header-ul">
              <li className="headerli">
               
                <img className="headerli-img" src={dis} alt="discover" /><Link to="/dashboard" style={{textDecoration:"none"}}> <span className="headerli-span">Discover</span></Link>
              </li>
              <li className="headerli">
               
                <img className="headerli-img"src={inb} alt="inbox" />
                <Link style={{textDecoration:"none"}}>
                
                <span className="headerli-span">Inbox</span>
                </Link>
              </li>
              <li className="headerli">
               
               <img className="headerli-img"src={req} alt="request" />
                <Link to="/requestpage" style={{textDecoration:"none"}}>
                  <span className="headerli-span">Request</span>
                </Link>
              </li>
              <li className="headerli">
               
                <img className="headerli-img" src={sav} alt="saved" />
                <Link style={{textDecoration:"none"}}>
                <span className="headerli-span">Saved</span>
                </Link>
              </li>
              <li className="headerli">
               
                <img className="headerli-img" src={noti} alt="notification" />
                <Link style={{textDecoration:"none"}}>
                <span className="headerli-span">Notifications</span>
                </Link>
              </li>                
            </ul> */}
             <ul className="header-ul">
      <li
        className="headerli"
        onMouseEnter={() => handleMouseEnter('discover')}
        onMouseLeave={handleMouseLeave}
      >
        <img className="headerli-img" src={dis} alt="discover" />
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <span
            className="headerli-span"
            style={{ color: hoveredItem === 'discover' ? 'rgba(26, 13, 171, 1)' : 'black' }}
          >
            Discover
          </span>
        </Link>
      </li>
      <li
        className="headerli"
        onMouseEnter={() => handleMouseEnter('inbox')}
        onMouseLeave={handleMouseLeave}
      >
        <img className="headerli-img" src={inb} alt="inbox" />
        <Link  style={{ textDecoration: 'none' }}>
          <span
            className="headerli-span"
            style={{ color: hoveredItem === 'inbox' ? 'rgba(26, 13, 171, 1)' : 'black' }}
          >
            Inbox
          </span>
        </Link>
      </li>
      <li
        className="headerli"
        onMouseEnter={() => handleMouseEnter('request')}
        onMouseLeave={handleMouseLeave}
      >
        <img className="headerli-img" src={req} alt="request" />
        <Link to="/requestpage" style={{ textDecoration: 'none' }}>
          <span
            className="headerli-span"
            style={{ color: hoveredItem === 'request' ? 'rgba(26, 13, 171, 1)' : 'black' }}
          >
            Request
          </span>
        </Link>
      </li>
      <li
        className="headerli"
        onMouseEnter={() => handleMouseEnter('saved')}
        onMouseLeave={handleMouseLeave}
      >
        <img className="headerli-img" src={sav} alt="saved" />
        <Link  style={{ textDecoration: 'none' }}>
          <span
            className="headerli-span"
            style={{ color: hoveredItem === 'saved' ? 'rgba(26, 13, 171, 1)' : 'black' }}
          >
            Saved
          </span>
        </Link>
      </li>
      <li
        className="headerli"
        onMouseEnter={() => handleMouseEnter('notifications')}
        onMouseLeave={handleMouseLeave}
      >
        <img className="headerli-img" src={noti} alt="notifications" />
        <Link  style={{ textDecoration: 'none' }}>
          <span
            className="headerli-span"
            style={{ color: hoveredItem === 'notifications' ? 'rgba(26, 13, 171, 1)' : 'black' }}
          >
            Notifications
          </span>
        </Link>
      </li>
    </ul>
          </div>
 
      </div>
      <div className="frame2">
          <div className="header-logout">
            <button className="header-logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
 
    </nav>
  );
 
};
 
export default Navbar;