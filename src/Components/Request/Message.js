import React, { useState } from 'react';
import './Message.css'; // Optional CSS file for styling
import logo1 from "../../Images/1.png";
const Message = ({msg}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const openModal = () => {
    setIsModalOpen(true);
  };
 
  const closeModal = () => {
    setIsModalOpen(false);
  };
 
  return (
    <div className="message-container">
      <div className="message-box" onClick={openModal}>
        <img src={logo1} alt="Profile" className="profile-photo" />
        <div className="message-content">
          <p>{msg}</p>
          <small>Last seen 2 days ago</small>
        </div>
      </div>
 
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>Chat with Cardano</h2>
            <div className="chat-box">
              {/* Placeholder for the chat messages */}
              <div className="message">Hello! How can I help you with dApp development?</div>
            </div>
            <input
              type="text"
              className="chat-input"
              placeholder="Type your message..."
            />
            <button className="send-btn">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};
 
export default Message;