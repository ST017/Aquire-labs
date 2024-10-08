import React, { useRef, useState, useEffect } from "react";
import {
  Checkbox,
  Checkbox1,
  CheckboxContainer,
  CheckboxLabel,
  CloseButton,
  Cont2,
  Dash,
  Footer,
  ForgotPassword,
  Form,
  FormContainer,
  Heading,
  ImageHash,
  Input,
  InsideContainer,
  Label,
  LoginButton,
  LoginContainer,
  Logo,
  LogoContainer,
  OutsideForm,
  ReCaptchaContainer,
  ReCaptchaImage,
  ReCaptchaLabel,
  SignupContainer,
  SignupLink,
  SignupText,
  Subtitle,
  Subtitle1,
  Title,
} from "./Login.style";
import closebutton from "../Images/Closebutton.png";
import aquirelab from "../Images/Aquirelabs.png";
import aqdash from "../Images/Aqdash.png";
import aqtext from "../Images/Aquire Labs.png";
import recaptcha from "../Images/recaptcha.png";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "./Firebase/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Star1 } from "./Signup.style";
import { Link, useNavigate } from "react-router-dom";
import RaisaLogo from "../Images/RaisaLogo.png";
import Hash from "../Images/Hash.png";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
  document.body.style.background = "rgba(242, 246, 255, 1)";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // New state for Remember Me
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  /* const [emailError,setEmailError]=useState(null)
  const [passwordError,setPasswordError]=useState(null) */

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
        toast.success("A Password Reset Link has been sent to your Email", {
          position: "top-center",
        });
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
        toast.success("User Logged In Successfully!!", {
          position: "top-center",
        });
        navigate("/dashboard");

        // Handle Remember Me functionality
        if (rememberMe) {
          localStorage.setItem("email", email); // Save email if Remember Me is checked
        } else {
          localStorage.removeItem("email"); // Clear email if Remember Me is unchecked
        }
      } else {
        toast.error(
          "Email is not verified. Please verify your email before logging in.",
          { position: "top-center" }
        );
      }
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password. Please try again.", {
          position: "top-center",
        });
        //setPasswordError("Wrong Password")
      } else if (error.code === "auth/user-not-found") {
        toast.error("Email not found. Please sign up first.", {
          position: "top-center",
        });
      } else {
        toast.error("Login failed. Please check your credentials.", {
          position: "top-center",
        });
      }
    }
  };
  // Toggle between showing and hiding the password
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);

    if (!e.target.checked) {
      localStorage.removeItem("email"); // Remove email from localStorage when unchecked
    }
  };

  return (
    <div className="main">
      <LoginContainer>
        {/* <div className='form-dis'> */}
        <LogoContainer>
          <Logo src={RaisaLogo} alt="Aquire Labs" />

          <CloseButton>
            <Link to="/">
              <img src={closebutton} alt="Close button" />
            </Link>
          </CloseButton>
        </LogoContainer>
        <InsideContainer>
          <FormContainer>
            <OutsideForm>
              <Title>Login</Title>
              <Subtitle>Welcome Back!</Subtitle>
              <Subtitle1>
                Start managing your partnership faster & better
              </Subtitle1>
            </OutsideForm>

            <Form onSubmit={handleFormSubmit}>
              <Label>
                Email<a style={{ color: "red" }}>*</a>
              </Label>
              <Input
                type="email"
                placeholder="name@company.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email} // Bind email to state
              />

              <Label>
                Password<a style={{ color: "red" }}>*</a>
              </Label>
              <div style={{ position: "relative", width: "100%" }}>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    paddingRight: "40px", // Adjust padding to give space for the eye icon
                    width: "100%",
                    boxSizing: "border-box", // Ensure padding is considered in width
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "40%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: "rgba(120, 139, 165, 1)",
                  }}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>

              <ForgotPassword onClick={handleForgetPassword}>
                Forget Password?
              </ForgotPassword>

              <CheckboxContainer>
                <Checkbox1
                  type="checkbox"
                  checked={rememberMe} // Bind checkbox to state
                  onChange={handleRememberMe} // Update state and localStorage on change
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
                  <SignupLink onClick={() => window.open("/signup", "_blank")}>
                    Signup
                  </SignupLink>
                </SignupContainer>
              </Cont2>
            </Form>
          </FormContainer>
          <Footer>© 2024 ALL RIGHTS RESERVED</Footer>
        </InsideContainer>
        {/* </div> */}
      </LoginContainer>
      <ToastContainer />
      <img src={Hash} alt="hash" className="imghash" />
    </div>
  );
};

export default Login;
