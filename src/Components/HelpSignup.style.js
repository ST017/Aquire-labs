import styled from 'styled-components';

export const HelpContainer = styled.div`
  width: 432px;
  height: 277.96px;
  background-color: #ffffff;
  border-radius: 15px;
  position: relative;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  width: 10px;
height: 10px;
padding: 11.25px 11.25px 11.25px 11.25px;
gap: 11.25px;
border-radius: 112.5px 112.5px 112.5px 112.5px;
color:rgba(238, 238, 238, 1);
border:1px solid black;
display:flex;
justify-content:center;
align-items:center;


  img {
    width: 20px;
    height: 20px;
  }
`;

export const HelpSection = styled.div`
  padding: 20px;
`;

export const HelpHeader = styled.p`

font-size: 18px;
font-weight: 700;
line-height: 21.78px;
color:rgba(0, 0, 0, 1);

  margin-bottom: 5px;
`;

export const HelpText = styled.p`

font-size: 14px;
font-weight: 400;

color:rgba(181, 181, 181, 1);

  margin-bottom: 15px;
`;

export const HelpContact = styled.div`
  
font-size: 14px;
font-weight: 500;
line-height: 19.99px;
text-align: left;

  margin-top: 10px;
  


  
    color:rgba(0, 60, 255, 1);
    margin-bottom: 5px;
  
`;

export const ContactItem = styled.p`
 
font-size: 14px;
font-weight: 500;
line-height: 19.99px;
text-align: left;

  color:rgba(0, 0, 0, 1);
  margin-bottom: 5px;
`;

export const ContactLink = styled.a`
  color: #0040ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
