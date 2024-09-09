import React, { useState } from 'react';
import { Checkbox, Checkbox1, CheckboxContainer, CheckboxLabel, CloseButton, Cont2, Dash, Footer, ForgotPassword, Form, Form1, Form2, FormContainer, Heading, ImageHash, Input, InsideContainer, Label, LoginButton, LoginContainer, Logo, LogoContainer, OutsideForm, ReCaptchaContainer, ReCaptchaImage, ReCaptchaLabel, SignupContainer, SignupLink, SignupText, Subtitle, Subtitle1, Title } from './Login.style';
import closebutton from "../Images/Closebutton.png"
import aquirelab from "../Images/Aquirelabs.png"
import aqdash from "../Images/Aqdash.png"
import aqtext from "../Images/Aquire Labs.png"
import aqhash from "../Images/Hash.png"
import recaptcha from "../Images/recaptcha.png"
import { signInWithEmailAndPassword , fetchSignInMethodsForEmail} from 'firebase/auth';
import { auth } from './Firebase/firebase';
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Star1 } from './Signup.style';
import { useNavigate } from 'react-router-dom';




const Login = () => {
  document.body.style.background="rgba(242, 246, 255, 1)"
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
 
  const navigate=useNavigate()
 
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email is required.", { position: "top-center" });
      return;
    }
    if (!password) {
      toast.error("Password is required.", { position: "top-center" });
      return;
    }
    try {
      
  
      // Proceed to verify email and password
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const user = userCred.user;
  
      // Check if the email is verified
      if (user.emailVerified) {
        toast.success("User Logged In Successfully!!", {
          position: "top-center",
        });
        navigate("/dashboard")
      } else {
        toast.error("Email is not verified. Please verify your email before logging in.", {
          position: "top-center",
        });
      }
    } catch (error) {
      // Handle errors, especially if password is incorrect
      if (error.code === 'auth/wrong-password') {
        toast.error("Incorrect password. Please try again.", { position: "top-center" });
      } else if (error.code === 'auth/user-not-found') {
        toast.error("Email not found. Please sign up first.", { position: "top-center" });
      } else {
        toast.error("Login failed. Please check your credentials.", { position: "top-center" });
      }
    }
  };
  
  return (
    <>
    
    <LoginContainer>
       
      <LogoContainer>
        <Logo src={aquirelab} alt="Aquire Labs" />
        <Heading src={aqtext} alt='Aquire Labs Text'/>
        <Dash src={aqdash} alt="Aquire Labs Dash"/>
        <CloseButton><img src={closebutton}/></CloseButton>
      </LogoContainer>
      <InsideContainer>
      <FormContainer>
        <OutsideForm>
        <Title>Login</Title>
        <Subtitle>Welcome Back!</Subtitle>
        <Subtitle1>Start managing your partnership faster & better</Subtitle1>
        </OutsideForm>

        <Form onSubmit={handleFormSubmit}>
          
          <Label>Email<Star1>*</Star1></Label>
          {/* <Input type="email" placeholder="name@company.com" onChange={(e)=>setEmail(e.target.value)} /> */}
          <Input 
  type="email" 
  placeholder="name@company.com" 
  onChange={(e) => setEmail(e.target.value)} 
  value={email} // Make sure email is bound to the state
/>
          <Label>Password<Star1>*</Star1></Label>
          <Input type="password" placeholder="Enter your full Name" onChange={(e)=>setPassword(e.target.value)} />
          <ForgotPassword>Forget Password?</ForgotPassword>
          <CheckboxContainer>
            <Checkbox1 type="checkbox" />
            <CheckboxLabel>Remember Me</CheckboxLabel>
          </CheckboxContainer>
          <ReCaptchaContainer>
            <Checkbox type="checkbox" />
            <ReCaptchaLabel>I’m not a robot</ReCaptchaLabel>
           <ReCaptchaImage src={recaptcha} alt="reCAPTCHA" />  
          </ReCaptchaContainer> 
          <Cont2>
          <LoginButton type='submit'>Login</LoginButton>
          <SignupContainer>
            <SignupText>Don’t you have account?</SignupText>
            <SignupLink>Signup</SignupLink>
          </SignupContainer>
          </Cont2>
        </Form>
      </FormContainer>
      <Footer>© 2024 ALL RIGHTS RESERVED</Footer>
      
      </InsideContainer>
    </LoginContainer>
     
   {/*  <ImageHash src={aqhash} alt="Logo-Hash"/> */}
    <ToastContainer/>
    </>
  );
};

export default Login;
