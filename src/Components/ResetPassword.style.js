// ResetPassword.style.js
import styled from "styled-components";

// ResetPassword.style.js
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 89px 13px 89px; /* Custom padding */
  width: 589px; /* Custom width */
  height: 615.98px; /* Custom height */
  position: absolute; /* Position the container */
  top: 25px; /* Positioning from the top */
  left: 350px; /* Positioning from the left */
  gap: 20px; /* Custom gap between elements */
  border-radius: 15px 0px 0px 0px; /* Custom border-radius */
  border-width: 1px 0px 0px 0px; /* Custom border */
  border-style: solid;
  border-color: #ccc; /* Border color */
  align:center;
 
  
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
   
`;

export const Label = styled.p`
  width:100px;
  height:20px;
  font-size: 14px;
  padding:0px, 0.46px, 0.98px, 0px;
  margin-bottom: 10px;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  line-height:19.99px;
  margin-top:-10px;
`;

export const Label1 = styled.p`
  width:157.46px;
  height:20.98px;
  font-size: 14px;
  padding:0px, 0.46px, 0.98px, 0px;
  margin-bottom: 10px;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  line-height:19.99px;
  margin-top:-40px;
`;





export const Title = styled.p`
  width:411px;
  height:51px;
  font-size: 24px;
  padding:15px, 34px, 0px, 34px;
  margin-bottom: 10px;
  font-weight: 700;
  color: rgba(0, 0, 0, 1);
  line-height:36px;
`;

export const SubTitle = styled.p`
  width:379px;
  height:17px;
  font-size: 14px;
  margin-top: -30px;
  font-weight: 400;
  color: rgba(181, 181, 181, 1);
  line-height:16.94px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  position: relative;

  label {
    text-align: left;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 14px;
  }
`;

export const InnerContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px; /* Custom gap */
  width: 411px; /* Custom width */
  height: 577.98px; /* Custom height */
  margin-top:-10px;
`;

export const Input = styled.input`
  width: 350px;
  height:40.02px;
  padding: 9.5px, 13px, 9.5px, 13px;
  border-radius: 6px;
  border: 1px solid rgba(222, 228, 237, 1);
  font-size: 14px;
  color:rgba(120, 139, 165, 1);
`;

export const EyeIconContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const EyeIcon = styled.img`
  position: absolute;
  right: 12px; /* Position it inside the input box */
  cursor: pointer;
  color: rgba(120, 139, 165, 1);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right:50px;
`;

export const PasswordRequirements = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`;

export const Instructions = styled.div`

margin-top:-50px;
margin-left:7px;
  
  ul {
    padding: 0;
    list-style: .;
    text-align: left;
     width:187px;
    height:17px;
   font-size: 14px;
   font-weight: 400;
   color: rgba(102, 112, 133, 1);
    margin: 0;
  }

  ul li {
    margin-bottom: 5px;
  }
`;

export const Instructions1 = styled.div`

margin-top:-50px;
margin-right:-10px;
  
  ul {
    padding: 0;
    list-style: .;
    text-align: left;
    width:187px;
    height:17px;
   font-size: 14px;
   font-weight: 400;
   color: rgba(102, 112, 133, 1);
   line-height:16.94px;
    margin: 0;
  }

  ul li {
    margin-bottom: 5px;
  }
`;

export const Button = styled.button`
  width:231px;
  height:42px;
  padding: 10px, 45px, 10px, 45px;
  background-color:rgba(0, 60, 255, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-weight:700;
  line-height:21.78px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  margin-top:-10px;
 
`;

export const BackLink = styled.p`
  margin-top: 10px;
  color:rgba(0, 0, 0, 1);
  font-size: 14px;
  font-weight:600;
  

  
`;

export const BackLink1 = styled.span`
  margin-top: 10px;
  color:rgba(0, 60, 255, 1);
  font-size: 14px;
  font-weight:600;
  cursor:pointer;
  

  
`;

export const FooterText=styled.p`
  
  color:rgba(149, 156, 182, 1);
  font-size: 14px;
  font-weight:500;
  line-height:19.99px;
  margin-top:-10px;
`;
