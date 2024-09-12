// ResetPassword.js
import React, { useState } from "react";
import {
  Container,
  Title,
  SubTitle,
  FormGroup,
  Input,
  Button,
  
  BackLink,
  Instructions,
  PasswordRequirements,
  Label,
  Label1,
  InnerContainer,
  Instructions1,
  BackLink1,
  FooterText,
  EyeIcon,
  EyeIconContainer,
} from "./ResetPassword.style";

import Eyeoff from "../Images/Eyeoff.png"
import Eyeon from "../Images/Eyeon.png"
import { useSearchParams } from "react-router-dom";
import { auth } from './Firebase/firebase';
import { toast, ToastContainer } from "react-toastify";

const ResetPassword = () => {
  const [searchParams] = useSearchParams(); // For getting oobCode from URL
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  const oobCode = searchParams.get("oobCode");
  const handleResetPassword =async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.",{ position: "top-center" });
      return;
    }
    try {
     
      await auth.confirmPasswordReset(oobCode, password);
      alert("Password reset successful!");
      window.location.href = "/login"; // Redirect to login
    } catch (error) {
      toast.error("Error Resetting Password",{ position: "top-center" });
    }
  };

  

  return (
    <Container>
        <InnerContainer>
      <Title>Choose a new password</Title>
      <SubTitle>All most done! Enter your new password and you're all set</SubTitle>

      <FormGroup>
        <Label>New Password</Label>
        <EyeIconContainer>
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
            />
            <EyeIcon src={showPassword?Eyeoff:Eyeon} alt="eye-logo" onClick={toggleShowPassword}/>
          </EyeIconContainer>
      </FormGroup>

      <FormGroup>
        <Label1>Confirm New Password</Label1>
        <EyeIconContainer>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
             <EyeIcon src={showConfirmPassword?Eyeoff:Eyeon} alt="eye-logo" onClick={toggleShowConfirmPassword}/>
          </EyeIconContainer>
      </FormGroup>

      <PasswordRequirements>
        <Instructions>
          <ul>
            <li>Minimum 8 characters</li>
            <li>One special character</li>
            <li>One number</li>
          </ul>
        </Instructions>
        <Instructions1>
          <ul>
            <li>One uppercase character</li>
            <li>One lowercase character</li>
          </ul>
        </Instructions1>
      </PasswordRequirements>

      <Button  onClick={handleResetPassword}>Reset Password</Button>
      <BackLink>← Back to <BackLink1 onClick={()=>window.open("/login","_blank")}>Login</BackLink1></BackLink>

      <FooterText>© 2024 ALL RIGHTS RESERVED</FooterText>
      </InnerContainer>
      <ToastContainer/>
    </Container>
  );
};

export default ResetPassword;
