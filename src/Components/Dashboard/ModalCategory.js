import React from 'react';
import "./ModalCategory.css"
import CategoryClose from "../../Images/CategoryClose.png"


const Modal = ({ maplist, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content-project">
        <div className="modal-close-button" onClick={onClose}>
          <img src={CategoryClose} alt='cose-button'/>
        </div>
        
        <ul className="modal-category-list">
          {maplist.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;

