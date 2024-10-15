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
import React from 'react';
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
            <ul className="header-ul">
              <li className="headerli">
               
                <img className="headerli-img" src={dis} alt="discover" /><Link to="/dashboard" style={{textDecoration:"none"}}> <a className="headerli-span">Discover</a></Link>
              </li>
              <li className="headerli">
               
                <img className="headerli-img"src={inb} alt="inbox" />
                <span className="headerli-span">Inbox</span>
              </li>
              <li className="headerli">
               
               <img className="headerli-img"src={req} alt="request" />
                <Link to="/requestpage" style={{textDecoration:"none"}}>
                  <a className="headerli-span">Request</a>
                </Link>
              </li>
              <li className="headerli">
               
                <img className="headerli-img" src={sav} alt="saved" />
                <span className="headerli-span">Saved</span>
              </li>
              <li className="headerli">
               
                <img className="headerli-img" src={noti} alt="notification" />
                <span className="headerli-span">Notifications</span>
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