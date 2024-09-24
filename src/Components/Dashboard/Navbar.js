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
    <header className="container">
    <div className="headercomp">
            <div  className="frame1">
                <div  className="Logo">
                    <img src={RaisaLogo} alt="logo"/>
                </div>
                    <nav  className="headermain">
                    <ul className="header-ul">
                    <li  className="Discover-l"> <img src={dis} alt="discover"/> <span>Discover</span></li>
                    <li  className="Inbox-l"> <img src={inb} alt="inbox"/><span>Inbox</span></li>
                    <li  className="Request-l"> <img src={req} alt="request"/><span >Request</span></li>
                    <li  className="Saved-l"> <img src={sav} alt="saved"/><span >Saved</span></li>
                    <li  className="Notifications-l"> <img src={noti} alt="notification"/><span>Notifications</span></li>
                    </ul>
                    </nav>
                </div>
                <div  className="frame2">
                    <div className="logout">
                      <button className="logout-btn">Logout</button>
                    </div>
                </div>
           
    </div>
</header>
  );
 
};
 
export default Navbar;