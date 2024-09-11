import styled from 'styled-components';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

export const SignupContainer = styled.div`
  width: 822px;
  height: 816.39px;
  padding: 20px;
  margin: auto;
  background: white;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 40px;
  border: 1px solid transparent;
  

  @media (max-width: 767px) {
    width: 90%;
    height: auto;
    padding: 15px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  
   @media (width: 540px) {
  width: 450px;
  height: 1000px;
  padding: 20px;
  margin-left: 25px;
 
  background: white;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 40px;
  border: 1px solid transparent;
  }

   
`;

export const Logo1 = styled.img`
 position: absolute;
  top: 48%;
  left: 33%;
  transform: translate(-50%, -50%);
  height: 40px;
   
  @media (width: 344px) {
  position: absolute;
  top: 48%;
  left: 32%;
  transform: translate(-50%, -50%);
  height: 40px;
  }
  
  @media (min-width: 400px) {
  position: absolute;
  top: 48%;
  left: 35%;
  transform: translate(-50%, -50%);
  height: 40px;
  }
  
  @media (min-width: 700px) {
    height: 30px;
    top: 53%;
    margin-left:44px;
  }
    @media (width: 1024px) {
    height: 30px;
    top: 58%;
    margin-left:44px;
  }
`;
export const Heading1=styled.img`
  position: absolute; /* Positioning it absolutely */
  top: 85%;
  left: 48.5%;
  transform: translate(-50%, -50%); /* Centering */
  height: 21.12px;
  width:126.84px;

  @media (max-width: 768px) {
    top: 70%;
    height: 18px;
    width: 100px;
  }
  
`;
export const  Dash1=styled.img`
  position: absolute; /* Positioning it absolutely */
  top: 136%;
  left: 47.3%;
  transform: translate(-50%, -50%); /* Centering */
  height:3.85px;
  width:152px;


  @media (max-width: 768px) {
    top: 120%;
    height: 3px;
    width: 120px;
  }
  
`;


export const CloseButton2 = styled.button`
  margin-left:705px;
  font-size: 22px;
  cursor: pointer;
  border-width: 0.14px 0.14px 0.14px 0.14px;
  border-radius: 50%;
  background: #EEEEEE;


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
     margin-left: 256px;
  }
  @media (width: 540px) {
     margin-left: 400px;
  }
  @media (min-width: 800px) {
     margin-left: 700px;
  }
  

`;

export const Title = styled.p`
  font-family:Inter;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color:rgba(0, 0, 0, 1);


  
`;

export const OutsideContainer=styled.div`
  width:390px;
  height:69.98px;
  margin-left:195px;
  margin-top:50px;

   @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    height: auto;
    margin-top: 20px;
  }
  
  
  
`

export const Subtitle = styled.p`
  font-family:Inter;
  text-align: center;
  font-size: 14px;
  font-weight:400;
  margin-top:-10px;
  color:rgba(120, 139, 165, 1);
`;

export const Form = styled.form`
  margin-left: 40px;
  width: 740px;
  height: 504px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 769px) {
    width: 100%;   // Ensure the form takes full width on tablets
    margin-left: 0;
    gap: 1rem;     // Slightly reduce the gap between elements for better spacing
  }

  @media (max-width: 480px) {
    width: 80%;  // Full width on mobile
    margin-left: 15px;
    padding: 0 10px;  // Add some padding on mobile for spacing around the form
    gap: 0.75rem;  // Reduce gap to optimize for smaller screens
    height: auto;  // Remove fixed height for better flexibility on mobile
  }
`;


export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;  // Stacks inputs vertically on tablet-sized screens
    gap: 1.2rem;  // Slightly increase gap for better readability on tablets
  }

  @media (max-width: 480px) {
    flex-direction: column;  // Stacks vertically on smaller mobile screens
    gap: 1rem;  // Maintain a consistent gap on mobile
    width: 80%;  // Ensure inputs take the full width of the container
  }
`;


export const Input = styled.input`
  font-family:Inter;
  font-weight:400;
  width:362px;
  height:40px;
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
  color:rgba(120, 139, 165, 1);


  &[type='password'] {
    position: relative;
  }


  @media (max-width: 769px) {
    width: 125%;
  }
   @media (width: 768px) {
    width: 100%;
  }
   @media (width: 540px) {
    width: 100%;
  }
`;
export const InputSelect = styled.select`
  font-family:Inter;
  font-weight:400;
  width:362px;
  height:40px;
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
  color:rgba(120, 139, 165, 1);


  &[type='password'] {
    position: relative;
  }


  @media (max-width: 769px) {
    width: 125%;
  }
   @media (width: 768px) {
    width: 100%;
  }
   @media (width: 540px) {
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;


export const Input1 = styled.input`
  width: 740px;
  height:147.04px;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
  }

   @media (max-width: 768px) {
    width: 100%;
    height: 120px;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxLabel = styled.label`
  font-family:Inter;
  font-weight:400;
  font-size: 14px;
  color: black;
  font:bold;
  margin-left: 0.5rem;
`;
export const CheckboxLabel1 = styled.label`
  font-family:Inter;
  font-weight:400;
  font-size: 14px;
  color: rgba(0, 60, 255, 1);
  font:bold;
  margin-left: 0.5rem;
`;
export const Checkbox2 = styled.input`
  width:16px;
  height:16px;
  margin-right: 10px;
  border: 1px solid rgba(209, 213, 219, 1) ;
  border-radius: 4px;
  margin-top:-10px;
`;

export const Button = styled.button`
  font-family:Inter;
  width:203px;
  height:54px;
  background-color: rgba(0, 60, 255, 1);
  color: rgba(255, 255, 255, 1);
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight:700;
  cursor: pointer;
  margin-left:270px;
  margin-top:40px;

  &:hover {
    background-color: #0056b3;
  }

   @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
  }
`;

export const LoginLink = styled.p`
  font-weight:600;
  font-family:Inter;
  text-align: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
  margin-top: 0px;
  cursor:pointer;
  margin-left:5px;
`;
export const LoginLink1 = styled.span`
  font-weight:600;
  font-family:Inter;
  text-align: center;
  font-size: 14px;
  color: rgba(0, 60, 255, 1);
  margin-top: 0px;
  cursor:pointer;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
export const Star1=styled.span`
 font-family:Inter;
 font-weight:500;
 font-size:14px;
 color:rgba(255, 54, 54, 1);

`

export const Help=styled.img`
  width: 70.93px;
  height: 70px;
  position: absolute; 
  top: 823px;
  left: 1188px;
  padding: 23px 28px ;
  gap: 14.25px; 
  border-radius: 142.5px;

   @media (max-width: 768px) {
    top: 900px;
    left: 50%;
    transform: translateX(-50%);
  }
  
 
`;
