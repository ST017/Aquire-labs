import React from 'react';
import {
  HelpContainer,
  HelpHeader,
  HelpText,
  HelpContact,
  ContactItem,
  ContactLink,
  CloseButton,
  HelpSection,
} from './HelpSignup.style';
import closeIcon from '../Images/Closebutton.png';  // Replace with the actual path to the close icon
import { FaBullseye } from 'react-icons/fa';

const HelpSignup = ({setIsHelpModalOpen}) => {
  return (
    <HelpContainer>
      <CloseButton>
        <img src={closeIcon} alt="Close button" onClick={()=>setIsHelpModalOpen(false)}/>
      </CloseButton>
      <HelpSection>
        <HelpHeader>HELP</HelpHeader>
        <HelpText>Using a regular email to register?</HelpText>
        <p style={{

fontSize: "14px",
fontWeight:"500",
color:"rgba(0, 0, 0, 1)",

}}>Verify using the TG group</p>
        <HelpContact>
          <p style={{marginBottom:"0px"}}>Contact us</p>
          <ContactItem>
            Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : <ContactLink href="mailto:exapmle@email.com">exapmle@email.com</ContactLink>  
          </ContactItem>
          <ContactItem>
            Telegram&nbsp;&nbsp;: <ContactLink href="https://t.me/VeersinghD" target="_blank">@VeersinghD</ContactLink>
          </ContactItem>
        </HelpContact>
      </HelpSection>
    </HelpContainer>
  );
};

export default HelpSignup;
