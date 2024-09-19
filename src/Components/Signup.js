import React, { useEffect, useState } from "react";
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
  InputSelect,
} from "./Signup.style"; // This imports the styled components
import aquirelab from "../Images/Aquirelabs.png";
import aqdash from "../Images/Aqdash.png";
import aqtext from "../Images/Aquire Labs.png";
import aqhash from "../Images/Hash.png";
import helpbutton from "../Images/Help.png";
import closebutton from "../Images/Closebutton.png";
import { Checkbox, ImageHash, Label, LogoContainer } from "./Login.style";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "./Firebase/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { addDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import RaisaLogo from "../Images/RaisaLogo.png";

const Signup = () => {
  document.body.style.background = "rgba(242, 246, 255, 1)";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [compWeb, setCompWeb] = useState("");
  const [password, setPassword] = useState("");
  const [reenterpassword, setReenterpassword] = useState("");
  const [category, setCategory] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [projDesc, setProjDesc] = useState("");
  
  const [user,setUser]=useState(null)

  const navigate = useNavigate();
  const actionCodeSettings = {
    // url: `${window.location.origin}/login`, // Your domain link
    url: `${window.location.origin}/dashboard`,
    handleCodeInApp: true, // To open it in your app

  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !compWeb ||
      !password ||
      !reenterpassword ||
      !category || !isChecked
    ) {
      toast.error("All fields are required!", { position: "top-center" });
      return;
    }
    if (reenterpassword !== password) {
      toast.error("password is not matching with re-entered password", {
        position: "top-center",
      });
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        async (userCred) => {
          const user = userCred.user;
          setUser(user)

          console.log(userCred);

          await sendEmailVerification(user, actionCodeSettings);
          // Add user details to Firestore after sending verification email
          const docRef = doc(db, "User", user.uid);

          await setDoc(docRef, {
            email: user.email,
            firstname: "", // Update with actual data
            lastname: "", // Update with actual data
            mobile: "", // Update with actual data
            role: "admin",
            id:user.uid,
            verified: false, // Set verified to false by default
            createdAt: new Date(), // Store the current timestamp
          });
          await setDoc(doc(db, "UserProject", user.uid), {
            blockchain:"",
            category:category,
            city:"",
            country:"",
            createdAt: new Date(),  // current timestamp
            descr: projDesc,  
            endorsements: 1,  
            fundingStatus: "",  
            logo: "", 
            modifiedAt: new Date(),  
            name: name,  
            social: {
              facebook: "", 
              insta: "",  // Instagram URL
              linkedin: "",  // LinkedIn URL
              tg: "",  // Telegram URL
              twitter: "",  // Twitter URL
            },
            status: "",  // status of the project (empty string for now)
            userId: user.uid,  // store the user ID
            views: 1,  // number of views (1 by default)
            website:compWeb,  // website URL (empty string for now)
            whitepaper: "",  // whitepaper URL (empty string for now)
          });


          toast.success(
            "Verify the Link to the Given Email for the Successful registeration!!!",
            { position: "top-center" }
          );

          setCategory("")
          setCompWeb("")
          setEmail("")
          setPassword("")
          setProjDesc("")
          setIsChecked(null)
          setReenterpassword("")
          setName("")
        }
      );
    } catch (error) {
      console.log(error);
    }
  };


  onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Check if the email is verified
        await user.reload(); // Reload user to get the latest email verification status
        if (user.emailVerified) {
          // If email is verified, update Firestore
          const userDocRef = doc(db, "User", user.uid);
          await updateDoc(userDocRef, {
            verified: true,
          });
         
        }
      }
    });
  
  

  return (
    <>
      <SignupContainer>
        <LogoContainer>
          <Logo1 src={RaisaLogo} alt="raisa-logo" />
          
          
          <CloseButton2>
            <img src={closebutton} alt="close-button" />
          </CloseButton2>
        </LogoContainer>
        <OutsideContainer>
          <Title>Signup</Title>
          <Subtitle>Signup and get started with GoWeb3 Network</Subtitle>
        </OutsideContainer>

        <Form onSubmit={handleFormSubmit}>
          <InputGroup>
            <InputWrapper>
              <Label>
                Project Name<Star1>*</Star1>
              </Label>
              <Input
                type="text"
                placeholder="Project Name"
                label="Project Name*"
                onChange={(e) => setName(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>
                Email<Star1>*</Star1>
              </Label>
              <Input
                type="email"
                placeholder="work email (Name@company.com)"
                label="Email*"
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputWrapper>
          </InputGroup>
          <InputGroup>
            <InputWrapper>
              <Label>
                Company Website<Star1>*</Star1>
              </Label>
              <Input
                type="url"
                placeholder="Company.com"
                label="Company Website*"
                onChange={(e) => setCompWeb(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>
                Category<Star1>*</Star1>
              </Label>
              <InputSelect
                onChange={(e) => setCategory(e.target.value)}
                defaultValue=""
              >
                <option value="">Select a Category</option>
                <option value="DeFi">DeFi</option>
                <option value="NFT">NFT</option>
                <option value="Gaming">Gaming</option>
                <option value="AI (Artificial Intelligence)">
                  AI (Artificial Intelligence)
                </option>
                <option value="Real World Assets (RWA)">
                  Real World Assets (RWA)
                </option>
                <option value="SocialFi">SocialFi</option>
                <option value="Privacy">Privacy</option>
                <option value="Prediction Markets">Prediction Markets</option>
                <option value="Payment Solutions">Payment Solutions</option>
                <option value="Yield Farming">Yield Farming</option>
                <option value="Stablecoins">Stablecoins</option>
                <option value="Layer 1 / Layer 2 Ecosystems">
                  Layer 1 / Layer 2 Ecosystems (e.g., Ethereum, Solana)
                </option>
                <option value="Proof of Stake (PoS)">
                  Proof of Stake (PoS)
                </option>
                <option value="Proof of Work (PoW)">Proof of Work (PoW)</option>
                <option value="Synthetic Assets">Synthetic Assets</option>
                <option value="Tokenized Commodities">
                  Tokenized Commodities
                </option>
                <option value="Virtual Reality">Virtual Reality</option>
                <option value="Decentralized Identity">
                  Decentralized Identity
                </option>
                <option value="Governance">Governance</option>
                <option value="Insurance">Insurance</option>
                <option value="Oracles">Oracles</option>
                <option value="Data Storage">Data Storage</option>
                <option value="CEX">CEX</option>
                <option value="DEX">DEX</option>
                <option value="VCs">VCs</option>
                <option value="Liquidity providers">Liquidity providers</option>
                <option value="Validator">Validator</option>
                <option value="Depin">Depin</option>
                <option value="Others">Others</option>
              </InputSelect>
            </InputWrapper>
          </InputGroup>
          <InputGroup>
            <InputWrapper>
              <Label>
                Password<Star1>*</Star1>
              </Label>
              <Input
                type="password"
                placeholder="Enter your password"
                label="Password*"
                icon
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>
                Re-Enter Password<Star1>*</Star1>
              </Label>
              <Input
                type="password"
                placeholder="Re-Enter your password"
                label="Re-Enter Password*"
                icon
                onChange={(e) => setReenterpassword(e.target.value)}
              />
            </InputWrapper>
          </InputGroup>

          <InputWrapper>
            <Label>Project Description</Label>
            <Input1 label="Project Description" onChange={(e)=>setProjDesc(e.target.value)} />
          </InputWrapper>

          <CheckboxWrapper>
            <Checkbox2 type="checkbox" checked={isChecked} onClick={()=>setIsChecked(true)} />
            <InputWrapper>
              <CheckboxLabel>
                By proceeding you agree to the Terms of Service and Privacy
                Policy.
              </CheckboxLabel>
              <CheckboxLabel1>Do you have any questions?</CheckboxLabel1>
            </InputWrapper>
          </CheckboxWrapper>

          <Button type="submit">Create Account</Button>

          <LoginLink>
            I already have an account <LoginLink1 onClick={()=>window.open("/login","_blank")}>Login</LoginLink1>
          </LoginLink>
        </Form>
      </SignupContainer>
      {/* <Help src={helpbutton}/>
    <ImageHash src={aqhash} alt="Logo-Hash"/> */}
      <ToastContainer />
    </>
  );
};
export default Signup;
