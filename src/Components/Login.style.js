import styled from 'styled-components';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

export const ImageHash = styled.img`
  width:300px;
  height:300px;
  position: absolute;
  bottom: -250px;
  left: 0;
 
`;

export const InsideContainer = styled.div`
  height: 659.94px;
  width: 350px;
  margin-left: 40px;

  @media (max-width: 768px) {
    width: 90%;
    margin-left: 5%;
  }
`;

export const OutsideForm = styled.div`
  height: 108.98px;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Cont2 = styled.div`
  height: 206px;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const LoginContainer = styled.div`
  width: 432px;
  height: 765.35px;
  padding: 20px;
  margin: auto;
  background: white;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 40px;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    padding: 10px;
  }
`;

export const LogoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 15px; /* Slightly reduce the margin for smaller screens */
    padding: 0 10px; /* Add padding if needed */
  }

  @media (max-width: 480px) {
    margin-bottom: 10px; /* Further reduce the margin on very small screens */
    padding: 0 5px;
  }
`;


export const Logo = styled.img`
  position: absolute;
  top: 55%;
  left: 35%;
  transform: translate(-50%, -50%);
  height: 40px;

  @media (max-width: 768px) {
    height: 30px;
    top: 50%;
  }
`;

export const Heading = styled.img`
  position: absolute;
  top: 85%;
  left: 51%;
  transform: translate(-50%, -50%);
  height: 21.12px;
  width: 126.84px;

  @media (max-width: 768px) {
    height: 18px;
    width: auto;
  }
`;

export const Dash = styled.img`
  position: absolute;
  top: 136%;
  left: 48%;
  transform: translate(-50%, -50%);
  height: 3.85px;
  width: 152px;

  @media (min-width: 344px) {
    height: 2px;
    width: 120px;
    left:49%
  }
  @media (min-width: 768px) {
    height: 2px;
    width: 120px;
    left:50%
  }
  @media (min-width: 820px) {
    height: 2px;
    width: 150px;
    left:48%
  }
`;

export const CloseButton = styled.button`
  margin-left: 340px;
  font-size: 22px;
  cursor: pointer;
  border-width: 0.14px;
  border-radius: 50%;
  background: #eeeeee;


  @media (min-width: 360px) {
     margin-left: 270px;
  }
  @media (min-width: 375px) {
     margin-left: 280px;
  }
  @media (min-width: 414px) {
     margin-left: 300px;
  }
  @media (min-width: 412px) {
     margin-left: 300px;
  }
  @media (width: 768px) {
     margin-left: 600px;
  }
  @media (width: 344px) {
     margin-left: 260px;
  }
  @media (width: 540px) {
     margin-left: 400px;
  }


  
`;

export const FormContainer = styled.div`
  padding: 10px 0;

  @media (max-width: 768px) {
    padding: 5px 0;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #181e25;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Subtitle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: #000000;
  margin-bottom: -10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Subtitle1 = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #b5b5b5;
  height: 17px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Form = styled.form`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: black;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid rgba(222, 228, 237, 1);
  border-radius: 4px;
  font-size: 14px;
  background: white;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.94px;
  text-align: left;
  color: rgba(120, 139, 165, 1);

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px;
  }
`;

export const ForgotPassword = styled.a`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  text-align: right;
  margin-bottom: 10px;
  cursor: pointer;
  color: rgba(0, 60, 255, 1);

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 10px; /* Adjust margin if needed for smaller devices */
  }
`;



export const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border: 2px solid rgba(222, 228, 237, 1);
  border-radius: 1px;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`;

export const Checkbox1 = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  border: 2px solid rgba(222, 228, 237, 1);
  border-radius: 1px;

  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
    margin-right: 5px;
  }
`;

export const CheckboxLabel = styled.p`
  font-size: 14px;
  font-family: Inter;
  color: rgba(0, 0, 0, 1);

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ReCaptchaContainer = styled.div`
  border-radius: 2px;
  border: 1px solid rgba(214, 214, 214, 1);
  display: flex;
  align-items: center;
  width: 350px;
  height: 74px;
  margin-bottom: 20px;
  color: rgba(214, 214, 214, 1);

  /* For screens smaller than 768px */
  @media (max-width: 768px) {
    width: 320px;
    height: 68px;
    margin-bottom: 15px;
  }

  /* For screens smaller than 540px */
  @media (max-width: 540px) {
    width: 300px;
    height: 64px;
    margin-bottom: 12px;
  }

  /* For screens smaller than 375px */
  @media (max-width: 375px) {
    width: 280px;
    height: 60px;
    margin-bottom: 10px;
  }

  /* For screens smaller than 360px */
  @media (max-width: 360px) {
    width: 270px;
    height: 58px;
    margin-bottom: 8px;
  }

  /* For screens smaller than 344px */
  @media (max-width: 344px) {
    width: 260px;
    height: 56px;
    margin-bottom: 6px;
  }
 
`;


export const ReCaptchaLabel = styled.label`
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  margin-right: 10px;
  color: rgba(0, 0, 0, 1);

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ReCaptchaImage = styled.img`
  height: 59px;
  width: 56px;
  margin-left: 140px;

  @media (max-width: 768px) {
    height: 50px;
    width: 48px;
    margin-left: auto;
    
  }
`;

export const LoginButton = styled.button`
  width: 149px;
  height: 42px;
  background-color: rgba(0, 60, 255, 1);
  color: white;
  padding: 10px 45px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 14px;
  margin-left: 150px;
  font-family: Inter;
  font-weight: 700;

  
  

  @media (max-width: 768px) {
    width: 30%; /* Width reduces but stays centered */
    font-size: 16px;
    margin-left: 215px; /* Auto margins to center the button */
    margin-right: auto;
    padding: 10px; /* Adjust padding for a better fit */
  }

   @media (max-width: 540px) {
    width: 50%; /* Reduce width further */
    font-size: 15px;
    margin-left: auto;
    margin-right: auto;
    padding: 8px;
  } 

  @media (min-width: 375px) {
    width: 30%;
    font-size: 14px;
    padding: 8px;
    margin-left: 110px;
    margin-right: auto;
  }

  @media (max-width: 360px) {
    width: 35%;
    font-size: 13px;
    padding: 7px;
    margin-left: 92px;
    margin-right: auto;
    margin-top:10px;
  }

  @media (max-width: 344px) {
    width: 40%;
    font-size: 12px;
    padding: 6px;
    margin-left: 80px;
    margin-right: auto;
    margin-top:10px;
  }
    
 

`;


export const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SignupText = styled.p`
  font-family: Inter;
  font-weight: 600;
  font-size: 14px;
  margin-right: 5px;
  color: rgba(0, 0, 0, 1);

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const SignupLink = styled.a`
  font-family: Inter;
  font-weight: 600;
  font-size: 14px;
  color: rgba(0, 60, 255, 1);
  cursor: pointer;
  margin-top: -12px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Footer = styled.footer`
  margin-top: -40px;
  font-size: 14px;
  text-align: center;
  font-weight: 500;
  font-family: Inter;
  color: rgba(149, 156, 182, 1);

  @media (max-width: 768px) {
    font-size: 12px;
    margin-top: 10px;
  }
`;
