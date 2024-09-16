import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">Logo</div>
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
