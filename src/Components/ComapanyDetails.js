import React, { useEffect, useState } from "react";
import "./CompanyDetails.css";
import Navbar from "./Dashboard/Navbar";
import receivelogo from "../Images/Received.png";
import sentlogo from "../Images/Sent.png";
import locationlogo from "../Images/loaction.png";
import breadcrumb from "../Images/breadcrumb.png";
import Telegram from "../Images/Telegram-Company.png";
import Reddit from "../Images/reddit-company.png";
import Group from "../Images/Group-Company.png";
import Twitter from "../Images/Twitter-Company.png";
import Git from "../Images/git-company.png";
import EditProfile from "./Dashboard/EditProfile";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "./Firebase/firebase";
import Footer from "./Dashboard/Footer";
import VerifyIcon from "../Images/VerificationIcon.png";
import Modal from "./Dashboard/ModalCategory";
import acceptsvg from "../Images/accept.svg.svg"

//import verify from "../Images/verify.png"

const CompanyDetails = () => {
  const [isEditprofile, setIsEditProfile] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requestTypes, setRequestTypes] = useState([]);
  const [message, setMessage] = useState("");
  const [isRequestTypeOpen, setIsRequestTypeOpen] = useState(false);
  const [userConnectsList, setUserConnectsList] = useState([]);
  const [matchingRequests, setMatchingRequests] = useState([]);
  const [myproject, setMyProject] = useState([]);
  const [requestSent, setRequestSent] = useState(0);
  const [requestReceived, setRequestReceived] = useState(0);
  const [userConnectsDocId, setUserConnectsDocId] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
 const [showMorePi , setShowMorePi] = useState(false);
 const [showMoreEc , setShowMoreEc] = useState(false);
 const [showMore , setShowMore] = useState(false);
  

  /* category code  */
  const [showAllCategories, setShowAllCategories] = useState(false);
/* blockchain (eco system)*/ 
const [showAllBlockchains, setShowAllBlockchains] = useState(false);

const [showAllPartnerships, setShowAllPartnerships] = useState(false);

const [showAllRequestTypes, setShowAllRequestTypes] = useState(false);


  useEffect(() => {
    const auth = getAuth();
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      }
    });
    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);
  document.body.style.background = "rgba(234, 239, 255, 1)";
  const selectedProject = JSON.parse(localStorage.getItem("selectedProject"));

  // Fetch user verification status
  const fetchUserVerification = async (userId) => {
    try {
      const usersRef = collection(db, "User"); // Assuming your collection name is 'Users'
      const userQuery = query(usersRef, where("id", "==", userId));
      const userSnapshot = await getDocs(userQuery);
      if (!userSnapshot.empty) {
        const userData = userSnapshot.docs[0].data(); // Get the first matched document
        setIsVerified(userData.verified); // Check if the user is verified
      }
    } catch (error) {
      console.error("Error fetching user verification:", error);
      setIsVerified(false); // Default to false if error occurs
    }
  };

  useEffect(() => {
    // Ensure selectedProject and userId exist
    if (selectedProject.userId) {
      fetchUserVerification(selectedProject.userId); // Fetch verification status
    }
  }, [selectedProject.userId, db]);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const fetchUserConnectCounts = async (
    userId,
    setRequestSent,
    setRequestReceived
  ) => {
    try {
      // Reference to the UserConnects collection
      const connectsRef = collection(db, "UserConnects");

      // Create query to match userId
      const userQuery = query(connectsRef, where("userId", "==", userId));

      // Create query to match toUserId
      const toUserQuery = query(connectsRef, where("toUserId", "==", userId));

      // Run both queries in parallel
      const [userSnapshot, toUserSnapshot] = await Promise.all([
        getDocs(userQuery),
        getDocs(toUserQuery),
      ]);

      // Set state for requestSent and requestReceived
      setRequestSent(userSnapshot.size); // Count of requests sent (userId)
      setRequestReceived(toUserSnapshot.size); // Count of requests received (toUserId)
    } catch (error) {
      console.error("Error fetching data:", error);
      setRequestSent(0); // Default to 0 if error occurs
      setRequestReceived(0); // Default to 0 if error occurs
    }
  };

  useEffect(() => {
    // Ensure selectedProject and userId exist
    if (selectedProject?.userId) {
      fetchUserConnectCounts(
        selectedProject.userId,
        setRequestSent,
        setRequestReceived
      );
    }
  }, [selectedProject, db]);

  // Function to handle cancel request (delete operation)
  const handleCancelRequest = async (docid) => {
    try {
      // Reference to the document in UserConnects collection
      const docRef = doc(db, "UserConnects", docid);

      // Delete the document
      await deleteDoc(docRef);

      alert(`Request is cancelled!!.`);

      await fetchUserConnects();
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const handleRequestTypeChange = (type) => {
    setRequestTypes((prev) => {
      if (prev.includes(type)) {
        // Uncheck: remove type from array
        return prev.filter((t) => t !== type);
      } else {
        // Check: add type to array
        return [...prev, type];
      }
    });
  };

  const handleSendSaveRequest = async () => {
    if (requestTypes.length == 0) {
      alert("Please Select Your Request Type");
      return;
    }
    try {
      // Add a new document to the UserConnects collection
      const docRef = await addDoc(collection(db, "UserConnects"), {
        createdAt: new Date(), // current timestamp
        projectId: selectedProject?.id || "", // project ID (from selected project)
        status: "Pending", // initial status is "pending"
        toUserId: selectedProject?.userId || "", // the user who owns the project
        userId: currentUser?.uid || "", // the current user sending the request
        requestTypes: [...requestTypes], // Array of selected request types
        message: message, // The message input from the user
        location: myproject?.country || "", //fromuser location
        name: myproject?.name || "", //fromuser project name
        profilePicture:myproject?.profilePicture || "",
        toname:selectedProject?.name || "",
        tolocation:selectedProject?.country || "",
        toprofilePicture:selectedProject?.profilePicture || "",
        lastCreatedAt:new Date(),
        tocategory:selectedProject?.category || []  ,
        tofundingstage:selectedProject?.fundingStatus || [],
        toecosystem:selectedProject?.blockchain || [],
        topartnershipinterest:selectedProject?.partnershipInterest || [],
        

        
      });

      console.log("Document written with ID: ", docRef.id);
      setUserConnectsDocId(docRef.id);
      setIsModalOpen(false);
      setIsRequestTypeOpen(false);
      setMessage("");
      await fetchUserConnects();
      await fetchMyProjectData();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  //fetch userconnects data
  const fetchUserConnects = async () => {
    try {
      // Reference to the UserConnects collection
      const userConnectsCollection = collection(db, "UserConnects");

      // Fetch all documents from the collection
      const querySnapshot = await getDocs(userConnectsCollection);

      // Map through the documents to create a list
      const userConnectsList = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Document ID
        ...doc.data(), // Document data
      }));

      console.log("Fetched User Connects: ", userConnectsList);
      setUserConnectsList(userConnectsList);
      // Use filter to find all matches for selectedProject.id
      const matchingRequests = userConnectsList.find(
        (ele) => ele.projectId === selectedProject.id
      );
      setMatchingRequests(matchingRequests);
    } catch (e) {
      console.error("Error fetching User Connects: ", e);
      return [];
    }
  };

  const fetchMyProjectData = async () => {
    try {
      const userProjectsCollection = collection(db, "UserProject");
      const userProjectsQuery = query(
        userProjectsCollection,
        where("userId", "==", currentUser?.uid)
      );

      const querySnapshot = await getDocs(userProjectsQuery);

      // Map through the documents to create a list
      const userProject = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Document ID
        ...doc.data(), // Document data
      }));

      setMyProject(userProject[0]);
    } catch (e) {
      console.error("Error fetching User Connects: ", e);
    }
  };
  useEffect(() => {
    fetchMyProjectData();
  }, [currentUser?.uid, db, isEditprofile]);

  useEffect(() => {
    fetchUserConnects();
  }, [db]);

  /* category code  */
  // Decide which category array to use based on the user
   const categories =
    selectedProject.userId === currentUser?.uid
      ? myproject?.category || []
      : selectedProject?.category || [];

  const visibleCategories = showAllCategories
    ? categories
    : categories.slice(0, 14); // Show first 14, rest hidden */
  /* category code end  */

  /* blockchain (ecosystem) */
  const blockchains =
  selectedProject.userId === currentUser?.uid
    ? myproject?.blockchain || []
    : selectedProject?.blockchain || [];

const visibleBlockchains = showAllBlockchains
  ? blockchains
  : blockchains.slice(0, 14);

    /* blockchain (ecosystem) */


    const partnershipInterests =
    selectedProject.userId === currentUser?.uid
      ? myproject?.partnershipInterest || []
      : selectedProject?.partnershipInterest || [];
  
  const visiblePartnershipInterests = showAllPartnerships
    ? partnershipInterests
    : partnershipInterests.slice(0, 14);
  

  const requesttypes =
  selectedProject.userId === currentUser?.uid
    ? myproject?.requestType || []
    : selectedProject?.requestType || [];

    const visibleRequestTypes = showAllRequestTypes
    ? requestTypes
    : requestTypes.slice(0, 14);
  

    const handleMoreClick = () => {
      setShowMore(true);
    };
  
    const closeModal = () => {
      setShowMore(false);
      setShowMorePi(false);
      setShowMoreEc(false);
    };

  return (
    <div className="companydetails-container">
      <div className="companydetails-navbar"><Navbar /></div>
      <div className="companydetails-sub">
        <div className="bread-container">
          <div className="bbcmb" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <img src={breadcrumb} alt="home" />
                <div className="a-div">
                  <a href="/dashboard">Dashboard</a>
                </div>
              </li>

              <li class="breadcrumb-item active" aria-current="page">
                Company Profile
              </li>
            </ol>
          </div>
        </div>

        <div className="company-details">
          {/* Header */}
          <div className="header-container">
            <div className="header-section">
              <img
                className="cover-photo"
                src={
                  selectedProject.userId === currentUser?.uid
                    ? myproject?.coverPicture
                    : selectedProject?.coverPicture
                }
                alt="cover-picture"
              />
            </div>
            <div className="subconatiner">
              <div className="profile-container">
                <div className="company-profile-logo">
                  <img
                    className="company-profile-photo"
                    src={
                      selectedProject?.userId === currentUser?.uid
                        ? myproject?.profilePicture
                        : selectedProject?.profilePicture
                    }
                    alt="profile-picture"
                  />
                </div>
                
                <div className="company-profile-text">
                  <div className="companyname-oneliner-container">
                  <div className="companyname-verification">
  <h4 className="company-name">
    {selectedProject?.userId === currentUser?.uid
      ? myproject?.name || "Default Company Name"
      : selectedProject?.name || "Default Company Name"}{" "}
    {isVerified && (
      <img
        src={VerifyIcon}
        alt="verified"
        className="verified-icon"
      />
    )}
   
  </h4>
  </div>
  <p className="oneliner">
    {selectedProject?.userId === currentUser?.uid
      ? myproject?.oneLiner || "Default company one-liner goes here"
      : selectedProject?.oneLiner || "Default company one-liner goes here"}
  </p>
  </div>
  <div className="location">
    <img className="location-img" src={locationlogo} alt="location" />
    <span className="city-conuntry">{selectedProject?.userId === currentUser?.uid
      ? myproject?.city || "Default City"
      : selectedProject?.city || "Default City"}
    ,{" "}
    {selectedProject?.userId === currentUser?.uid
      ? myproject?.country || "Default Country"
      : selectedProject?.country || "Default Country"} </span>
  </div>
</div>

                {/* <button className="edit-profile-btn">Edit Profile</button> */}
              </div>

              <div className="inner">
                {currentUser?.uid === selectedProject?.userId ? (
                  <>
                    <button
                      className="send-request-btn"
                      onClick={() => setIsEditProfile(true)}
                    >
                      Edit Profile
                    </button>
                    {isEditprofile && (
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
                        <div>
                          <EditProfile setIsEditProfile={setIsEditProfile} />
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {matchingRequests ? (
                      <>
                        {matchingRequests?.userId === currentUser?.uid ? (
                          <div>
                            {matchingRequests.status === "Pending" ? (
                              <button
                                className="send-request-btn"
                                onClick={()=>handleCancelRequest(matchingRequests.id)}
                              >
                                Cancel
                              </button>
                            ) : matchingRequests.status === "Denied" ||
                              matchingRequests.status === "Accepted" ? (
                              <button className="send-request-btn">
                                {matchingRequests.status}
                              </button>
                            ) : (
                              <button
                                className="send-request-btn"
                                onClick={handleToggleModal}
                              >
                                Send Request
                              </button>
                            )}
                          </div>
                        ) : matchingRequests?.toUserId === currentUser?.uid ? (
                          <div>
                            <button
                              style={{
                                backgroundColor: "#4A4AFF",
                                color: "#fff",
                                padding: "10px 20px",
                                borderRadius: "8px",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "14px",
                              }}
                            >
                              Accept
                            </button>
                            <button
                              style={{
                                backgroundColor: "#FF4A4A",
                                color: "#fff",
                                padding: "10px 20px",
                                borderRadius: "8px",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "14px",
                              }}
                            >
                              Deny
                            </button>
                          </div>
                        ) : (
                          <>
                            {/* If no matching request exists, show the "Send Request" button */}
                            <button
                              className="send-request-btn"
                              onClick={handleToggleModal}
                            >
                              Send Request
                            </button>

                            {/* Modal */}
                            {isModalOpen && (
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
                                <div
                                  style={{
                                    backgroundColor: "#fff",
                                    padding: "20px",
                                    borderRadius: "10px",
                                    width: "400px",
                                    maxWidth: "90%",
                                    border: "1px solid #ccc",
                                    boxShadow:
                                      "0px 4px 12px rgba(0, 0, 0, 0.1)",
                                  }}
                                >
                                  <h2
                                    style={{
                                      marginBottom: "10px",
                                      fontSize: "18px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    Send Requests
                                  </h2>

                                  {/* Request Type Dropdown */}
                                  <label
                                    style={{
                                      fontWeight: "600",
                                      fontSize: "14px",
                                      color: "#333",
                                    }}
                                  >
                                    Request Type
                                  </label>
                                  <div
                                    style={{
                                      border: "2px solid #4A4AFF", // Purple border
                                      borderRadius: "8px", // Rounded corners
                                      padding: "10px",
                                      position: "relative",
                                      marginBottom: "10px",
                                      cursor: "pointer",
                                      display: "flex",
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                      fontSize: "14px",
                                      color: "#333",
                                    }}
                                    onClick={() =>
                                      setIsRequestTypeOpen(!isRequestTypeOpen)
                                    }
                                  >
                                    <span>
                                      {requestTypes.length
                                        ? requestTypes.join(", ")
                                        : "Request Type"}
                                    </span>
                                    <span
                                      style={{
                                        transform: isRequestTypeOpen
                                          ? "rotate(180deg)"
                                          : "rotate(0)",
                                        color: "blue",
                                      }}
                                    >
                                      ▼
                                    </span>
                                  </div>
                                  {isRequestTypeOpen && (
                                    <div
                                      style={{
                                        border: "1px solid #4A4AFF",
                                        borderRadius: "8px",
                                        padding: "10px",
                                        marginBottom: "10px",
                                        backgroundColor: "#f9f9f9",
                                      }}
                                    >
                                      {[
                                        "Technical Collaboration",
                                        "Funding",
                                        "Listing",
                                        "Marketing",
                                        "Integrations",
                                        "Community Building",
                                        "Explore",
                                      ].map((type) => (
                                        <div
                                          key={type}
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            marginBottom: "8px",
                                            padding: "4px 0",
                                          }}
                                        >
                                          <input
                                            type="checkbox"
                                            value={type}
                                            checked={requestTypes.includes(
                                              type
                                            )}
                                            onChange={() =>
                                              handleRequestTypeChange(type)
                                            }
                                            style={{
                                              marginRight: "10px",
                                              width: "16px", // Fixed width for the checkbox
                                              height: "16px", // Fixed height for the checkbox
                                              border: "2px solid #4A4AFF", // Purple border for checkbox
                                              borderRadius: "4px", // Rounded checkbox
                                            }}
                                          />
                                          <label
                                            style={{
                                              fontSize: "14px",
                                              color: "#333",
                                              width: "100%",
                                            }}
                                          >
                                            {type}
                                          </label>
                                        </div>
                                      ))}
                                    </div>
                                  )}

                                  {/* Message */}
                                  <label
                                    style={{
                                      fontWeight: "600",
                                      display: "block",
                                      marginBottom: "5px",
                                      fontSize: "14px",
                                      color: "#333",
                                    }}
                                  >
                                    Message
                                  </label>
                                  <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Message"
                                    style={{
                                      width: "100%",
                                      height: "120px",
                                      border: "1px solid #4A4AFF",
                                      borderRadius: "8px",
                                      padding: "12px 14px",
                                      marginBottom: "16px",
                                      fontSize: "14px",
                                      color: "#333",
                                      outline: "none",
                                      boxSizing: "border-box",
                                      resize: "none", // Prevent resizing of the textarea
                                    }}
                                  ></textarea>

                                  {/* Buttons */}
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <button
                                      onClick={() => {
                                        setIsModalOpen(!isModalOpen);
                                        setMessage("");
                                        setIsRequestTypeOpen(false);
                                      }}
                                      style={{
                                        backgroundColor: "#ccc",
                                        padding: "10px 20px",
                                        borderRadius: "8px",
                                        border: "none",
                                        cursor: "pointer",
                                        fontSize: "14px",
                                      }}
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      onClick={handleSendSaveRequest}
                                      style={{
                                        backgroundColor: "#4A4AFF",
                                        color: "#fff",
                                        padding: "10px 20px",
                                        borderRadius: "8px",
                                        border: "none",
                                        cursor: "pointer",
                                        fontSize: "14px",
                                      }}
                                    >
                                      Send
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {/* If no matching request exists, show the "Send Request" button */}
                        <button
                          className="send-request-btn"
                          onClick={handleToggleModal}
                        >
                          Send Request
                        </button>

                        {/* Modal */}
                        {isModalOpen && (
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
                            <div
                              style={{
                                backgroundColor: "#fff",
                                padding: "20px",
                                borderRadius: "10px",
                                width: "400px",
                                maxWidth: "90%",
                                border: "1px solid #ccc",
                                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                              }}
                            >
                              <h2
                                style={{
                                  marginBottom: "10px",
                                  fontSize: "18px",
                                  fontWeight: "600",
                                }}
                              >
                                Send Requests
                              </h2>

                              {/* Request Type Dropdown */}
                              <label
                                style={{
                                  fontWeight: "600",
                                  fontSize: "14px",
                                  color: "#333",
                                }}
                              >
                                Request Type
                              </label>
                              <div
                                style={{
                                  border: "2px solid #4A4AFF", // Purple border
                                  borderRadius: "8px", // Rounded corners
                                  padding: "10px",
                                  position: "relative",
                                  marginBottom: "10px",
                                  cursor: "pointer",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  fontSize: "14px",
                                  color: "#333",
                                }}
                                onClick={() =>
                                  setIsRequestTypeOpen(!isRequestTypeOpen)
                                }
                              >
                                <span>
                                  {requestTypes.length
                                    ? requestTypes.join(", ")
                                    : "Request Type"}
                                </span>
                                <span
                                  style={{
                                    transform: isRequestTypeOpen
                                      ? "rotate(180deg)"
                                      : "rotate(0)",
                                    color: "blue",
                                  }}
                                >
                                  ▼
                                </span>
                              </div>
                              {isRequestTypeOpen && (
                                <div
                                  style={{
                                    border: "1px solid #4A4AFF",
                                    borderRadius: "8px",
                                    padding: "10px",
                                    marginBottom: "10px",
                                    backgroundColor: "#f9f9f9",
                                  }}
                                >
                                  {[
                                    "Technical Collaboration",
                                    "Funding",
                                    "Listing",
                                    "Marketing",
                                    "Integrations",
                                    "Community Building",
                                    "Explore",
                                  ].map((type) => (
                                    <div
                                      key={type}
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginBottom: "8px",
                                        padding: "4px 0",
                                      }}
                                    >
                                      <input
                                        type="checkbox"
                                        value={type}
                                        checked={requestTypes.includes(type)}
                                        onChange={() =>
                                          handleRequestTypeChange(type)
                                        }
                                        style={{
                                          marginRight: "10px",
                                          width: "16px", // Fixed width for the checkbox
                                          height: "16px", // Fixed height for the checkbox
                                          border: "2px solid #4A4AFF", // Purple border for checkbox
                                          borderRadius: "4px", // Rounded checkbox
                                        }}
                                      />
                                      <label
                                        style={{
                                          fontSize: "14px",
                                          color: "#333",
                                          width: "100%",
                                        }}
                                      >
                                        {type}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* Message */}
                              <label
                                style={{
                                  fontWeight: "600",
                                  display: "block",
                                  marginBottom: "5px",
                                  fontSize: "14px",
                                  color: "#333",
                                }}
                              >
                                Message
                              </label>
                              <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Message"
                                style={{
                                  width: "100%",
                                  height: "120px",
                                  border: "1px solid #4A4AFF",
                                  borderRadius: "8px",
                                  padding: "12px 14px",
                                  marginBottom: "16px",
                                  fontSize: "14px",
                                  color: "#333",
                                  outline: "none",
                                  boxSizing: "border-box",
                                  resize: "none", // Prevent resizing of the textarea
                                }}
                              ></textarea>

                              {/* Buttons */}
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <button
                                  onClick={() => {
                                    setIsModalOpen(!isModalOpen);
                                    setMessage("");
                                    setIsRequestTypeOpen(false);
                                  }}
                                  style={{
                                    backgroundColor: "#ccc",
                                    padding: "10px 20px",
                                    borderRadius: "8px",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "14px",
                                  }}
                                >
                                  Cancel
                                </button>
                                <button
                                  onClick={handleSendSaveRequest}
                                  style={{
                                    backgroundColor: "#4A4AFF",
                                    color: "#fff",
                                    padding: "10px 20px",
                                    borderRadius: "8px",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "14px",
                                  }}
                                >
                                  Send
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Main Body */}
          <div className="main-content1">
            {/* Left Section */}
            <div className="left-section1">
              {/* Biodata */}
              <div className="biodata-card1">
                <p className="biodata-heading">Biodata</p>
                <p className="biodata-text">
                  {selectedProject.userId === currentUser?.uid
                    ? myproject?.biodata || ""
                    : selectedProject?.biodata || ""}
                </p>
              </div>

              {/* Ecosystem */}

              <div className="ecosystem-card1">
              <p className="ecosystem-heading">Ecosystem</p>
<div className="ecosystem-text">
  
    {blockchains
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())) // Case-insensitive alphabetical sorting
      .slice(0, showAllBlockchains ? blockchains.length : 9) // Show first 14 or all if toggled
      .map((blockchain, index) => (
        <span key={index} className="category-item">
          {blockchain}
        </span>
      ))}

    {/* 'Show More' functionality for blockchains */}
    {!showAllBlockchains && blockchains.length > 9 && (
  <>
    <span
      className="category-more"
      onClick={()=>setShowMoreEc(true)}
    >
      +{blockchains.length - 9} More
    </span>
    {showMoreEc && (
      <Modal 
        maplist={blockchains.slice(9,blockchains.length)} 
        onClose={closeModal} 
      />
    )}
  </>
)}

    
    
  
</div>
              </div>

              {/* Partnership Interest */}
              <div className="partnership-card1">
              <p className="partnership-heading">Partnership Interested</p>
<div className="partnership-text">
  {partnershipInterests
    .sort((a, b) =>
      a.toLowerCase().localeCompare(b.toLowerCase())
    ) // Case-insensitive alphabetical sorting
    .slice(0, showAllPartnerships ? partnershipInterests.length :9) // Show first 9 or all if toggled
    .map((interest, index) => (
      <span key={index} className="category-item">
        {interest}
      </span>
    ))}

  {!showAllPartnerships && partnershipInterests.length > 9 && (
    <span
      className="category-more"
      /* onClick={() => setShowAllPartnerships(true)} */
      onClick={()=>setShowMorePi(true)}
    >
      +{partnershipInterests.length - 9} More
    </span>
  )}
  {showMorePi && (
        <Modal maplist={partnershipInterests.slice(9,partnershipInterests.length)} onClose={closeModal} />)}
</div>

              </div>


              {/* Whitepaper */}
              <div className="whitepaper-card1">
                {console.log('Matching request status:', matchingRequests?.status)}
                <p className="whitepaper-heading">
                  Whitepaper:
                  <a className="whitepaper-text">
                    {selectedProject.userId === currentUser?.uid
                      ? myproject?.whitepaper || ""
                      : selectedProject?.whitepaper}
                  </a>
                </p>
              </div>

              {/* Statement for Projects */}
              <div className="statement-card1">
                <p className="statement-heading">Statement for projects</p>
                <p className="statement-text">{selectedProject.userId === currentUser?.uid
                      ? myproject?.descr || ""
                      : selectedProject?.descr}</p>
              </div>
            </div>

            <div className="right-section-companydetails">
              <div className="companydetails-request-container">
                <div className="stat-item1">
                  <div className="stat-item1-left">
                    <img
                      src={receivelogo}
                      alt="logo"
                      className="received1-img1"
                    />
                    <span className="stat-item1-text">Requests Received</span>
                  </div>
                  
                  <div className="number-section">
                  
                  <p className="number-stat"> {String(requestReceived).padStart(3, '0')}</p>
                  
                  </div>
                </div>

                <div className="stat-item1">
                  <div className="stat-item1-left">
                    <img src={sentlogo} alt="logo" className="received1-img1" />
                    <span className="stat-item1-text">Requests Sent</span>
                  </div>
                  <div className="number-section">
                  <p className="number-stat" style={{ color: "white" }}>
                  {String(requestSent).padStart(3, '0')}
                  </p>
                  </div>
                </div>
              </div>

              {/* <div className="categories-card1">
              <p className="categories-heading">Categories</p>
              <p className="categories-text">
             {(selectedProject.userId===currentUser?.uid)?(myproject?.category || ""):(selectedProject?.category || "")} 

              </p>
            </div> */}
              {/* <div className="categories-card1">
  <p className="categories-heading">Categories</p>
  <div className="categories-text">
    {(selectedProject.userId === currentUser?.uid)
      ? (myproject?.category?.length > 0 ? (
          myproject.category.map((cat, index) => (
            <p key={index} className="category-item">{cat}</p>
          ))
        ) : (
          <p>No categories available</p>
        ))
      : (selectedProject?.category?.length > 0 ? (
          selectedProject.category.map((cat, index) => (
            <p key={index} className="category-item">{cat}</p>
          ))
        ) : (
          <p>No categories available</p>
        ))
    }
  </div>
</div> */}


              <div className="categories-card1">

                <p className="categories-heading">Categories</p>
                

                <div className="categories-text">

                  {categories
                    .sort((a, b) =>
                      a.toLowerCase().localeCompare(b.toLowerCase())
                    ) // Case-insensitive alphabetical sorting
                    .slice(0, showAllCategories ? categories.length : 14) // Show first 14 or all if toggled
                    .map((cat, index) => (
                      <span key={index} className="category-item">
                        {cat}
                      </span>
                    ))}
                  {!showAllCategories && categories.length > 14 && (
                    <span
                      className="category-more"
                      // onClick={() => setShowAllCategories(true)}
                      onClick={handleMoreClick}
                    >
                      +{categories.length - 14} More
                    </span>
                  )}
                   {showMore && (
        <Modal maplist={categories.slice(14,categories.length)} onClose={closeModal} />
      )}


{/* {selectedProject.userId === currentUser?.uid
                    ? myproject?.category || ""
                    : selectedProject?.category || ""} */}


                </div>
              </div> 

              <div className="request-type-card1">
              <p className="request-type-heading">Request Type</p>
<div className="request-type-text">
  {requesttypes
    .sort((a, b) =>
      a.toLowerCase().localeCompare(b.toLowerCase())
    ) // Case-insensitive alphabetical sorting
    .slice(0, showAllRequestTypes ? requesttypes.length : 14) // Show first 14 or all if toggled
    .map((type, index) => (
      <span key={index} className="category-item">
        {type}
      </span>
    ))}

  {!showAllRequestTypes && requesttypes.length > 14 && (
    <span
      className="category-more"
      onClick={() => setShowAllRequestTypes(true)}
    >
      +{requestTypes.length - 14} More
    </span>
  )}
</div>

              </div>


              <div className="social-media-card1">
                <p className="social-media-heading">Social Media</p>
                <div className="social-media-text">
                  <div className="containericon">
                    <img
                      src={Telegram}
                      alt="Telegram"
                      onClick={() => {
                        if (selectedProject?.userId === currentUser?.uid) {
                          if (myproject?.telegramLink) {
                            window.open(myproject?.telegramLink, "_blank");
                          } else {
                            alert("Unavailable Link");
                          }
                        } else {
                          if (selectedProject?.telegramLink) {
                            window.open(
                              selectedProject?.telegramLink,
                              "_blank"
                            );
                          } else {
                            alert("Unavailable Link");
                          }
                        }
                      }}
                    />
                  </div>
                  <div className="containericon">
                    <img
                      src={Reddit}
                      alt="Reddit"
                      onClick={() => {
                        if (selectedProject?.userId === currentUser?.uid) {
                          if (myproject?.redditLink) {
                            window.open(myproject?.redditLink, "_blank");
                          } else {
                            alert("Unavailable Link");
                          }
                        } else {
                          if (selectedProject?.redditLink) {
                            window.open(selectedProject?.redditLink, "_blank");
                          } else {
                            alert("Unavailable Link");
                          }
                        }
                      }}
                    />
                  </div>
                  <div className="containericon">
                    <img
                      src={Group}
                      alt="Group"
                      onClick={() => {
                        if (selectedProject?.userId === currentUser?.uid) {
                          if (myproject?.mediumLink) {
                            window.open(myproject?.mediumLink, "_blank");
                          } else {
                            alert("Unavailable Link");
                          }
                        } else {
                          if (selectedProject?.mediumLink) {
                            window.open(selectedProject?.mediumLink, "_blank");
                          } else {
                            alert("Unavailable Link");
                          }
                        }
                      }}
                    />
                  </div>
                  <div className="containericon">
                    <img
                      src={Twitter}
                      alt="Twitter"
                      onClick={() => {
                        if (selectedProject?.userId === currentUser?.uid) {
                          if (myproject?.twitterLink) {
                            window.open(myproject?.twitterLink, "_blank");
                          } else {
                            alert("Unavailable Link");
                          }
                        } else {
                          if (selectedProject?.twitterLink) {
                            window.open(selectedProject?.twitterLink, "_blank");
                          } else {
                            alert("Unavailable Link");
                          }
                        }
                      }}
                    />
                  </div>
                  <div className="containericon">
                    <img
                      src={Git}
                      alt="Git"
                      onClick={() => {
                        if (selectedProject?.userId === currentUser?.uid) {
                          if (myproject?.githubLink) {
                            window.open(myproject?.githubLink, "_blank");
                          } else {
                            alert("Unavailable Link");
                          }
                        } else {
                          if (selectedProject?.githubLink) {
                            window.open(selectedProject?.githubLink, "_blank");
                          } else {
                            alert("Unavailable Link");
                          }
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="companydetails-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
