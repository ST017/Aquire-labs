import React, { useEffect, useState } from 'react';
import {
  SignupContainer,
  Title,
  Subtitle,
  Form,
  InputGroup,
  Input,

  CheckboxWrapper,
  CheckboxLabel,
  Button,
  LoginLink,
  Logo1,
  Heading1,
  Dash1,
  CloseButton2,
  OutsideContainer,
  Input1,
  InputWrapper,
  Checkbox2,
  CheckboxLabel1,
  LoginLink1,
  Star1,
  Help,
  
} from './Signup.style'; // This imports the styled components
import aquirelab from "../Images/Aquirelabs.png"
import aqdash from "../Images/Aqdash.png"
import aqtext from "../Images/Aquire Labs.png"
import aqhash from "../Images/Hash.png"
import helpbutton from "../Images/Help.png"
import closebutton from "../Images/Closebutton.png"
import { Checkbox, ImageHash, Label, LogoContainer } from './Login.style';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth,db } from './Firebase/firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
  document.body.style.background="rgba(242, 246, 255, 1)"
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [compWeb,setCompWeb]=useState("")
  const [password,setPassword]=useState("")
  const[reenterpassword,setReenterpassword]=useState("")
  const [projDesc,setProjDesc]=useState("")
  const [userInfo,setUserInfo]=useState(null)
  
  const navigate=useNavigate()
  const actionCodeSettings = {
   // url: `${window.location.origin}/login`, // Your domain link
    url :`${window.location.origin}/dashboard`,
    handleCodeInApp: true // To open it in your app
  };
  
  const handleFormSubmit= async(e)=>{
    e.preventDefault()
    if (!name || !email || !compWeb || !password || !reenterpassword) {
      toast.error("All fields are required!", { position: "top-center" });
      return;
    }
    try {
       await createUserWithEmailAndPassword(auth,email,password).then(
        async (userCred)=>{
          const user=userCred.user

          await sendEmailVerification(user,actionCodeSettings)
          toast.success("Verify the Link to the Given Email for the Successful registeration!!!",{position:"top-center"})
          
        }
       )
      
       
       
        
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(()=>{
    auth.onAuthStateChanged((userCred)=>{
      console.log(userCred) 
      /* const {email,emailVerified}=userCred
      setUserInfo({email,emailVerified}) */
    })
  },[])
 

  
    
  return (
    <>
     
    <SignupContainer>
      <LogoContainer>
        <Logo1 src={aquirelab} alt="Aquire Labs" />
        <Heading1 src={aqtext} alt='Aquire Labs Text'/>
        <Dash1 src={aqdash} alt="Aquire Labs Dash"/>
        <CloseButton2><img src={closebutton} alt='close-button'/></CloseButton2>
      </LogoContainer>
      <OutsideContainer>
      <Title>Signup</Title>
      <Subtitle>Signup and get started with GoWeb3 Network</Subtitle>
      </OutsideContainer>

      <Form onSubmit={handleFormSubmit}>
        <InputGroup>
          <InputWrapper>
          <Label>Project Name<Star1>*</Star1></Label>
          <Input type="text" placeholder="Enter your full Name" label="Project Name*" onChange={(e)=>setName(e.target.value)}/>
          </InputWrapper>
          <InputWrapper>
          <Label>Email<Star1>*</Star1></Label>
          <Input type="email" placeholder="work email (Name@company.com)" label="Email*" onChange={(e)=>setEmail(e.target.value)} />
          </InputWrapper>
        </InputGroup>
        <InputGroup>
          <InputWrapper>
          <Label>Company Website<Star1>*</Star1></Label>
          <Input type="url" placeholder="Company.com" label="Company Website*" onChange={(e)=>setCompWeb(e.target.value)} />
          </InputWrapper>
          <InputWrapper>
          <Label>Category<Star1>*</Star1></Label>
          <Input type="text" placeholder="Category" label="Category*" />
          </InputWrapper>
        </InputGroup>
        <InputGroup>
         <InputWrapper>
         <Label>Password<Star1>*</Star1></Label>
          <Input type="password" placeholder="Enter your password" label="Password*" icon onChange={(e)=>setPassword(e.target.value)} />
          </InputWrapper>
          <InputWrapper>
          <Label>Re-Enter Password<Star1>*</Star1></Label>
          <Input type="password" placeholder="Re-Enter your password" label="Re-Enter Password*" icon />
          </InputWrapper>
        </InputGroup>

        <InputWrapper>
        <Label>Project Description</Label>
        <Input1  label="Project Description" />
        </InputWrapper>

        <CheckboxWrapper>
          <Checkbox2 type="checkbox" />
          <InputWrapper>
          <CheckboxLabel>
            By proceeding you agree to the Terms of Service and Privacy Policy.
          </CheckboxLabel>
          <CheckboxLabel1>
            Do you have any questions?
          </CheckboxLabel1>

          </InputWrapper>
        </CheckboxWrapper>

        <Button type='submit'>Create Account</Button>

        <LoginLink>
          I already have an account <LoginLink1>Login</LoginLink1>
        </LoginLink>
      </Form>
    </SignupContainer>
    {/* <Help src={helpbutton}/>
    <ImageHash src={aqhash} alt="Logo-Hash"/> */}
    <ToastContainer/>
    </>
  );
}
;

export default Signup;
