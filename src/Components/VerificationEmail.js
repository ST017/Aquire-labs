import React, { useRef } from 'react';
import './VerificationEmail.css';
import { Link } from 'react-router-dom';

const VerificationEmail = () => {
    // Set body background color
    document.body.style.background = "rgba(242, 246, 255, 1)";

    // Refs to each input
    const inputRefs = useRef([]);

    // Handle input change and focus shift
    const handleInputChange = (e, index) => {
        const value = e.target.value;

        if (value.length === 1 && index < inputRefs.current.length - 1) {
            // Move focus to the next input when a character is entered
            inputRefs.current[index + 1].focus();
        } else if (value.length === 0 && e.key === 'Backspace' && index > 0) {
            // If backspace is pressed and input is empty, move to the previous input
            inputRefs.current[index - 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        // Detect backspace key and shift focus when necessary
        if (e.key === 'Backspace' && e.target.value.length === 0 && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div className="verify-email-container">
            <p className='ver-em'>Verify Email</p>
            <p className='ver-em-text'>A verification code has been sent to you <br /> enter the code given below</p>
            <div className="code-input-container">
                {[...Array(4)].map((_, index) => (
                    <input
                        key={index}
                        className='ver-input'
                        type="text"
                        maxLength="1"
                        ref={el => inputRefs.current[index] = el}  
                        onChange={(e) => handleInputChange(e, index)} 
                        onKeyDown={(e) => handleKeyDown(e, index)}  
                        autoFocus={index === 0}  
                    />
                ))}
            </div>
            <button className="verify-button">
                <a className='vs-button-text'>Verify Now</a>
            </button>
            <p><a className="ver-back-to">← Back to </a><Link to="/login"><a className='ver-login'>Login</a></Link></p>
            <p className='ver-footer'>© 2024 ALL RIGHTS RESERVED</p>
        </div>
    );
};

export default VerificationEmail;
