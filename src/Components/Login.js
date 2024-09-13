import React, { useRef, useState, useEffect } from 'react';
import { Checkbox, Checkbox1, CheckboxContainer, CheckboxLabel, CloseButton, Cont2, Dash, Footer, ForgotPassword, Form, FormContainer, Heading, ImageHash, Input, InsideContainer, Label, LoginButton, LoginContainer, Logo, LogoContainer, OutsideForm, ReCaptchaContainer, ReCaptchaImage, ReCaptchaLabel, SignupContainer, SignupLink, SignupText, Subtitle, Subtitle1, Title } from './Login.style';
import closebutton from "../Images/Closebutton.png"
import aquirelab from "../Images/Aquirelabs.png"
import aqdash from "../Images/Aqdash.png"
import aqtext from "../Images/Aquire Labs.png"
import recaptcha from "../Images/recaptcha.png"
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './Firebase/firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Star1 } from './Signup.style';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  document.body.style.background = "rgba(242, 246, 255, 1)";
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // New state for Remember Me
  const navigate = useNavigate();

  // Load email from localStorage if Remember Me was checked
  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true); // Mark checkbox as checked
    }
  }, []);

  const handleForgetPassword = async () => {
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("A Password Reset Link has been sent to your Email", { position: "top-center" });
      })
      .catch((error) => {
        toast.error("Reset Link failed", { position: "top-center" });
      });
  };

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
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const user = userCred.user;

      // Check if the email is verified
      if (user.emailVerified) {
        toast.success("User Logged In Successfully!!", { position: "top-center" });
        navigate("/dashboard");

        // Handle Remember Me functionality
        if (rememberMe) {
          localStorage.setItem("email", email); // Save email if Remember Me is checked
        } else {
          localStorage.removeItem("email"); // Clear email if Remember Me is unchecked
        }
      } else {
        toast.error("Email is not verified. Please verify your email before logging in.", { position: "top-center" });
      }
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        toast.error("Incorrect password. Please try again.", { position: "top-center" });
      } else if (error.code === 'auth/user-not-found') {
        toast.error("Email not found. Please sign up first.", { position: "top-center" });
      } else {
        toast.error("Login failed. Please check your credentials.", { position: "top-center" });
      }
    }
  };

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked); 
  };

  return (
    <>
      <LoginContainer>
        <LogoContainer>
          <Logo src={aquirelab} alt="Aquire Labs" />
          <Heading src={aqtext} alt="Aquire Labs Text" />
          <Dash src={aqdash} alt="Aquire Labs Dash" />
          <CloseButton><img src={closebutton} alt="Close button" /></CloseButton>
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
              <Input
                type="email"
                placeholder="name@company.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email} // Bind email to state
              />

              <Label>Password<Star1>*</Star1></Label>
              <Input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              

              <ForgotPassword onClick={handleForgetPassword}>Forget Password?</ForgotPassword>

              <CheckboxContainer>
                <Checkbox1
                  type="checkbox"
                  checked={rememberMe} // Bind checkbox to state
                  onChange={handleRememberMe}
                />
                <CheckboxLabel>Remember Me</CheckboxLabel>
              </CheckboxContainer>

              <ReCaptchaContainer>
                <Checkbox type="checkbox" />
                <ReCaptchaLabel>I’m not a robot</ReCaptchaLabel>
                <ReCaptchaImage src={recaptcha} alt="reCAPTCHA" />
              </ReCaptchaContainer>

              <Cont2>
                <LoginButton type="submit">Login</LoginButton>
                <SignupContainer>
                  <SignupText>Don’t you have account?</SignupText>
                  <SignupLink onClick={() => window.open("/signup", "_blank")}>Signup</SignupLink>
                </SignupContainer>
              </Cont2>
            </Form>
          </FormContainer>
          <Footer>© 2024 ALL RIGHTS RESERVED</Footer>
        </InsideContainer>
      </LoginContainer>
      <ToastContainer />
    </>
  );
};

export default Login;
