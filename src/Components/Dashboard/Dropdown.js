import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ proplist, heading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle checkbox selection
  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="dropdown">
      <div className="dropdown-input" onClick={toggleDropdown}>
        {selectedOptions.length > 0 ? (
          <span>{selectedOptions.join(", ")}</span>
        ) : (
          <span className="placeholder">{heading}</span>
        )}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          {proplist.map((option) => (
            <div key={option} className="dropdown-item">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
