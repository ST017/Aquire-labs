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
  CloseButtonX,
  ImageHash1,
  IconWrapper,
  InputWrapperResponsive,
} from "./Signup.style"; // This imports the styled components
import aquirelab from "../Images/Aquirelabs.png";
import aqdash from "../Images/Aqdash.png";
import aqtext from "../Images/Aquire Labs.png";
import aqhash from "../Images/Hash.png";
import helpbutton from "../Images/Help.png";
import closebutton from "../Images/Closebutton.png";
import {
  Checkbox,
  CloseButton,
  ImageHash,
  Label,
  Logo,
  LogoContainer,
} from "./Login.style";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "./Firebase/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import RaisaLogo from "../Images/RaisaLogo.png";
import { CategoryList } from "./Dashboard/Filterlists";
import HelpSignup from "./HelpSignup";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  document.body.style.background = "rgba(242, 246, 255, 1)";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [compWeb, setCompWeb] = useState("");
  const [password, setPassword] = useState("");
  const [reenterpassword, setReenterpassword] = useState("");
  const [category, setCategory] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [projDesc, setProjDesc] = useState("");
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showReenterPassword, setShowReenterPassword] = useState(false);

  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const actionCodeSettings = {
    // url: `${window.location.origin}/login`, // Your domain link
    url: `${window.location.origin}/dashboard`,
    handleCodeInApp: true, // To open it in your app
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleReenterPasswordVisibility = () => {
    setShowReenterPassword(!showReenterPassword);
  };

  const handleHelpModal = () => {
    setIsHelpModalOpen(true);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (value && !category.includes(value)) {
      setCategory([...category, value]); // Add selected category to the array
      
    }
  };

  const handleFormSubmit = async (e) => {
    // Regex for password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/;

    //Regex for email validation
    const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;

    e.preventDefault();
    if (
      !name ||
      !email ||
      !compWeb ||
      !password ||
      !reenterpassword ||
      !category ||
      !isChecked
    ) {
      toast.error("All fields are required!", { position: "top-center" });
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Invalid Email Format", { position: "top-center" });
      return;
    }
    if (!passwordRegex.test(password)) {
      toast.error("Please use  strong password", { position: "top-center" });
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
          setUser(user);

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
            id: user.uid,
            verified: false, // Set verified to false by default
            createdAt: new Date(), // Store the current timestamp
            tgVerified: false,
          });

          await addDoc(collection(db, "UserProject"), {
            blockchain: [],
            category: category,
            city: "",
            country: "",
            createdAt: new Date(), // current timestamp
            descr: projDesc,
            endorsements: 1,
            fundingStatus: [],
            logo: "",
            modifiedAt: new Date(),
            name: name,
            social: {
              facebook: "",
              insta: "", // Instagram URL
              linkedin: "", // LinkedIn URL
              tg: "", // Telegram URL
              twitter: "", // Twitter URL
            },
            status: "", // status of the project (empty string for now)
            userId: user.uid, // store the user ID
            views: 1, // number of views (1 by default)
            website: compWeb, // website URL (empty string for now)
            whitepaper: "", // whitepaper URL (empty string for now)
          });

          toast.success(
            "Verify the Link to the Given Email for the Successful registeration!!!",
            { position: "top-center" }
          );

          setCategory("");
          setCompWeb("");
          setEmail("");
          setPassword("");
          setProjDesc("");
          setIsChecked(null);
          setReenterpassword("");
          setName("");
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
      <div style={{ overflowX: "hidden" }}>
        <SignupContainer>
          <LogoContainer>
            <Logo src={RaisaLogo} alt="Aquire Labs" />

            <Link to="/">
              <CloseButtonX>
                <img src={closebutton} alt="Close button" />
              </CloseButtonX>
            </Link>
          </LogoContainer>
          <OutsideContainer>
            <Title style={{ marginTop: "30px" }}>Signup</Title>
            <Subtitle>Signup and get started with GoWeb3 Network</Subtitle>
          </OutsideContainer>
            
          <Form onSubmit={handleFormSubmit}>
            <InputGroup>
              <InputWrapper>
                <Label>
                  Project Name<a style={{ color: "red" }}>*</a>
                </Label>
                <Input
                  value={name}
                  type="text"
                  placeholder="Project Name"
                  label="Project Name*"
                  onChange={(e) => setName(e.target.value)}
                />
              </InputWrapper>
              <InputWrapper>
                <Label>
                  Email<a style={{ color: "red" }}>*</a>
                </Label>
                <Input
                  value={email}
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
                  Company Website<a style={{ color: "red" }}>*</a>
                </Label>
                {/*  <Input
                value={compWeb}
                type="url"
                placeholder="Company.com"
                label="Company Website*"
                onChange={(e) => setCompWeb(e.target.value)}
              /> */}

                <Input
                  value={compWeb}
                  type="url"
                  placeholder="Company.com"
                  label="Company Website*"
                  onChange={(e) => {
                    let inputValue = e.target.value;

                    // Check if input starts with "www" but doesn't have "https://" or "http://"
                    if (
                      inputValue.startsWith("www.") &&
                      !inputValue.startsWith("http://") &&
                      !inputValue.startsWith("https://")
                    ) {
                      inputValue = "https://" + inputValue; // Prepend 'https://'
                    }

                    // Update the state
                    setCompWeb(inputValue);
                  }}
                />
              </InputWrapper>
              <InputWrapper>
                <Label>
                  Category<a style={{ color: "red" }}>*</a>
                </Label>
               
                {/* <InputSelect
                  onChange={(e) => setCategory(e.target.value)}
                  defaultValue=""
                >
                  <option value="">Select a Category</option>
                  {CategoryList.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </InputSelect> */}

<InputSelect onChange={handleCategoryChange} defaultValue="">
  <option value="">Select a Category</option>
  {CategoryList.map((category, index) => (
    <option key={category} value={category}>
      {category}
    </option>
  ))}
</InputSelect>
              </InputWrapper>
            </InputGroup>
            <InputGroup>
              <InputWrapper>
                <Label>
                  Password <a style={{ color: "red" }}>*</a>
                </Label>
                <InputWrapperResponsive>
                  <Input
                    value={password}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <IconWrapper onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </IconWrapper>
                </InputWrapperResponsive>
              </InputWrapper>

              <InputWrapper>
                <Label>
                  Re-Enter Password <a style={{ color: "red" }}>*</a>
                </Label>
                <InputWrapperResponsive>
                  <Input
                    value={reenterpassword}
                    type={showReenterPassword ? "text" : "password"}
                    placeholder="Re-Enter your password"
                    onChange={(e) => setReenterpassword(e.target.value)}
                  />
                  <IconWrapper onClick={toggleReenterPasswordVisibility}>
                    {showReenterPassword ? <FaEyeSlash /> : <FaEye />}
                  </IconWrapper>
                </InputWrapperResponsive>
              </InputWrapper>
            </InputGroup>

            <InputWrapper>
              <Label>Project Description</Label>
              <Input1
                label="Project Description"
                onChange={(e) => setProjDesc(e.target.value)}
                value={projDesc}
              />
            </InputWrapper>

            <CheckboxWrapper>
              <Checkbox2
                type="checkbox"
                checked={isChecked}
                onClick={() => setIsChecked(true)}
              />
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
              I already have an account{" "}
              <Link to="/login">
                <a style={{ color: "rgba(0, 60, 255, 1)", cursor: "pointer" }}>
                  Login
                </a>
              </Link>
            </LoginLink>
          </Form>
        </SignupContainer>
        <Help src={helpbutton} onClick={handleHelpModal} />
        {isHelpModalOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 50,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <HelpSignup setIsHelpModalOpen={setIsHelpModalOpen} />
          </div>
        )}

        <ImageHash1 src={aqhash} alt="Logo-Hash" />
      </div>
      <ToastContainer />
    </>
  );
};
export default Signup;
