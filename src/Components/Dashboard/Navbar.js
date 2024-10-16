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
        <div className="Logo">
          <img src={RaisaLogo} alt="logo" />
        </div>
        <div className="headermain">
          <ul className="header-ul">
            <li className="Discover-l">
             
              <img src={dis} alt="discover" /> <Link to="/dashboard"><span style={{textDecorationLine:"none"}}>Discover</span></Link>
            </li>
            <li className="Inbox-l">
             
              <img src={inb} alt="inbox" />
              <span>Inbox</span>
            </li>
            <li className="Request-l">
             
             <img src={req} alt="request" />
              <Link  to="/requestpage">
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
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  </nav>
  );
 
};
 
export default Navbar;