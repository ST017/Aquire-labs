import React, { useEffect, useState } from "react";
import "./CompanyDetails.css";
import Navbar from "./Dashboard/Navbar";
import receivelogo from "../Images/Received.png";
import sentlogo from "../Images/Sent.png";
import locationlogo from "../Images/loaction.png";
import breadcrumb from "../Images/breadcrumb.png";
import Telegram from "../Images/Telegram-Company.png"
import Reddit from  "../Images/reddit-company.png"
import Group from "../Images/Group-Company.png"
import Twitter from "../Images/Twitter-Company.png"
import Git from "../Images/git-company.png"
import EditProfile from "./Dashboard/EditProfile";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addDoc, collection,deleteDoc,doc,getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "./Firebase/firebase";
import Footer from "./Dashboard/Footer";

//import verify from "../Images/verify.png"
 
 
const CompanyDetails = () => {
  const [isEditprofile, setIsEditProfile] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requestTypes, setRequestTypes] = useState([]);
  const [message, setMessage] = useState("")
  const [isRequestTypeOpen, setIsRequestTypeOpen] = useState(false);
  const [userConnectsList,setUserConnectsList]=useState([])
  const [matchingRequests,setMatchingRequests]=useState([])
  const [myproject,setMyProject]=useState([])
  const [requestSent, setRequestSent] = useState(0);
  const [requestReceived, setRequestReceived] = useState(0);
  const [userConnectsDocId,setUserConnectsDocId]=useState(null)
 
 
 
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
    document.body.style.background="rgba(234, 239, 255, 1)"
    const selectedProject = JSON.parse(localStorage.getItem('selectedProject'));
 
 
    const handleToggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
    const fetchUserConnectCounts = async (userId, setRequestSent, setRequestReceived) => {
      try {
        // Reference to the UserConnects collection
        const connectsRef = collection(db, 'UserConnects');
    
        // Create query to match userId
        const userQuery = query(connectsRef, where('userId', '==', userId));
    
        // Create query to match toUserId
        const toUserQuery = query(connectsRef, where('toUserId', '==', userId));
    
        // Run both queries in parallel
        const [userSnapshot, toUserSnapshot] = await Promise.all([
          getDocs(userQuery),
          getDocs(toUserQuery)
        ]);
    
        // Set state for requestSent and requestReceived
        setRequestSent(userSnapshot.size);      // Count of requests sent (userId)
        setRequestReceived(toUserSnapshot.size); // Count of requests received (toUserId)
      } catch (error) {
        console.error('Error fetching data:', error);
        setRequestSent(0);      // Default to 0 if error occurs
        setRequestReceived(0);   // Default to 0 if error occurs
      }
    };


  useEffect(() => {
    // Ensure selectedProject and userId exist
    if (selectedProject?.userId) {
      fetchUserConnectCounts(selectedProject.userId, setRequestSent, setRequestReceived);
    }
  }, [selectedProject,db]);

    // Function to handle cancel request (delete operation)
const handleCancelRequest = async () => {
  
  try {
    // Reference to the document in UserConnects collection
    const docRef = doc(db, 'UserConnects', matchingRequests.id);

    // Delete the document
    await deleteDoc(docRef);

    alert(`Request is cancelled!!.`);

    await fetchUserConnects()
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
      if(requestTypes.length==0){
        alert("Please Select Your Request Type")
        return
      }
      try {
        // Add a new document to the UserConnects collection
        const docRef = await addDoc(collection(db, "UserConnects"), {
          createdAt: new Date(), // current timestamp
          projectId: selectedProject?.id || "", // project ID (from selected project)
          status: "pending", // initial status is "pending"
          toUserId: selectedProject?.userId || "", // the user who owns the project
          userId: currentUser?.uid || "", // the current user sending the request
          requestTypes: [...requestTypes], // Array of selected request types
          message: message, // The message input from the user
          location:myproject?.location || "",//fromuser location
          name:myproject?.name, //fromuser project name
         
        });
 
        console.log("Document written with ID: ", docRef.id);
        setUserConnectsDocId(docRef.id)
        setIsModalOpen(false);
        setIsRequestTypeOpen(false);
        setMessage("")
        await fetchUserConnects()
 
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
      const userConnectsList = querySnapshot.docs.map(doc => ({
        id: doc.id, // Document ID
        ...doc.data(), // Document data
      }));
 
      console.log("Fetched User Connects: ", userConnectsList);
      setUserConnectsList(userConnectsList)
      // Use filter to find all matches for selectedProject.id
      const matchingRequests = userConnectsList.find(
        ele => ele.projectId === selectedProject.id
      );
      setMatchingRequests(matchingRequests)
    } catch (e) {
      console.error("Error fetching User Connects: ", e);
      return [];
    }
  };
 
  const fetchMyProjectData=async()=>{
    try {
     
      const userProjectsCollection = collection(db, "UserProject");
      const userProjectsQuery=query(userProjectsCollection,where("userId","==",currentUser?.uid))
 
     
      const querySnapshot = await getDocs(userProjectsQuery);
 
      // Map through the documents to create a list
      const userProject = querySnapshot.docs.map(doc => ({
        id: doc.id, // Document ID
        ...doc.data(), // Document data
      }));
 
      setMyProject(userProject[0])
 
     
     
    } catch (e) {
      console.error("Error fetching User Connects: ", e);
   
    }
  }
  useEffect(()=>{
    fetchMyProjectData()
   
  },[currentUser?.uid])
 
  useEffect(()=>{
     fetchUserConnects()
  },[db])
  return (
    <div className="companydetails-container">
      <Navbar />
     
     <div className="companydetalis-subcontainer">
      <div  className="bbcmb"aria-label="breadcrumb">
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><img  src={breadcrumb} alt="home"/><div className="a-div" ><a href="/dashboard">Dashboard</a></div></li>
           
            <li class="breadcrumb-item active" aria-current="page">Current Page</li>
        </ol>
        </div>
 
      <div className="company-details">
       
   
       
        {/* Header */}
        <div className="header-container">
          <div className="header-section"><img className="cover-photo" src={selectedProject?.coverPicture} alt="cover-picture"/></div>
          <div className="subconatiner">
          <div className="profile-container">
  <div className="company-profile-logo">
    <img className="company-profile-photo" src={selectedProject?.profilePicture} alt="profile-picture" />
  </div>
  <div className="company-profile-text">
    <h4>{selectedProject?.name} {/* <img className="verified-icon" src={verify} alt="verified" /> */}</h4>
    <p className="oneliner">{selectedProject?.oneLiner}</p>
    <h6>
      <img src={locationlogo} alt="location" />
      {selectedProject?.city}, {selectedProject?.country}
    </h6>
  </div>
  {/* <button className="edit-profile-btn">Edit Profile</button> */}
</div>
 
            <div className="inner">
 
  {currentUser?.uid === selectedProject?.userId  ? (
    <>
      <button className="send-request-btn" onClick={() => setIsEditProfile(true)}>
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
              
              {matchingRequests.status==="pending"?(<button className="send-request-btn" onClick={handleCancelRequest}>
                Cancel
              </button>):((matchingRequests.status==="Denied" || matchingRequests.status==="Accepted")?(<button className="send-request-btn" >
                {matchingRequests.status}
              </button>):(<button className="send-request-btn" onClick={handleToggleModal}>
                Send Request
              </button>))}
              
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
              <button className="send-request-btn" onClick={handleToggleModal}>
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
                      onClick={() => setIsRequestTypeOpen(!isRequestTypeOpen)}
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
                              onChange={() => handleRequestTypeChange(type)}
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
                      style={{ display: "flex", justifyContent: "space-between" }}
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
          <button className="send-request-btn" onClick={handleToggleModal}>
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
                      onClick={() => setIsRequestTypeOpen(!isRequestTypeOpen)}
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
                              onChange={() => handleRequestTypeChange(type)}
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
                      style={{ display: "flex", justifyContent: "space-between" }}
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
                {selectedProject?.descr || ""}
               
              </p>
            </div>
 
            {/* Ecosystem */}
            <div className="ecosystem-card1">
  <p className="ecosystem-heading">Ecosystem</p>
  <div className="ecosytem-text">
    <p className="blockchain-data">{selectedProject?.blockchain || ""}</p>
  </div>
</div>
 
 
            {/* Partnership Interest */}
            <div className="partnership-card1">
              <p className="partnership-heading">Partnership Interested</p>
              <p className="partnership-text">{selectedProject?.partnershipInterest || ""}</p>
            </div>
 
            {/* Whitepaper */}
            <div className="whitepaper-card1">
              <p className="whitepaper-heading">Whitepaper:<a className="whitepaper-text">{selectedProject?.whitepaper}</a></p>
            </div>
 
            {/* Statement for Projects */}
            <div className="statement-card1">
              <p className="statement-heading">Statement for projects</p>
              <p className="statement-text">
               {selectedProject?.descr || ""}
              </p>
            </div>
          </div>
           
           <div className="right-section-companydetails">
            <div className="stat-item1">
              <img src={receivelogo} alt="logo" className="received1-img1"/> <a className="stat-item1-text">Requests Received</a> <a className="number-stat">{requestReceived}</a>
            </div>
            <div className="stat-item1">
            <img src={sentlogo} alt="logo" className="received1-img1"/><a className="stat-item1-text" style={{marginRight:"40px"}}> Requests Sent </a> <a className="number-stat">{requestSent}</a>
            </div>
 
            <div className="categories-card1">
              <p className="categories-heading">Categories</p>
              <p className="categories-text">{selectedProject?.category || ""}</p>
            </div>
 
            
            <div className="request-type-card1">
              <p className="request-type-heading">Request Type</p>
              <p className="request-type-text">{selectedProject?.requestType || ""}</p>
            </div>
 
           
            <div className="social-media-card1">
              <p className="social-media-heading">Social Media</p>
              <div className="social-media-text">
    <div className="containericon"><img src={Telegram} alt="Telegram" onClick={() => {
      if(selectedProject?.telegramLink){
        window.open(selectedProject?.telegramLink, '_blank')
      }
      else{
        alert("Unavailable Link")
      }
      }} /></div>          
    <div className="containericon"><img src={Reddit} alt="Reddit" onClick={() => {
      if(selectedProject?.redditLink){
        window.open(selectedProject?.redditLink, '_blank')
      }
      else{
         alert("Unavailable Link")
      }
      }} /></div>
    <div className="containericon"><img src={Group} alt="Group" onClick={() => {
      if(selectedProject?.mediumLink){
        window.open(selectedProject?.mediumLink, '_blank')
      }
      else{
        alert("Unavailable Link")
      }
      }} /></div>
    <div className="containericon"><img src={Twitter} alt="Twitter" onClick={() => {
      if(selectedProject?.twitterLink){
        window.open(selectedProject?.twitterLink, '_blank')
      }
      else{
        alert("Unavailable Link")
      }
      }} /></div>
    <div className="containericon"><img src={Git} alt="Git" onClick={() => {
      if(selectedProject?.githubLink){
        window.open(selectedProject?.githubLink, '_blank')
      }
      else{
        alert("Unavailable Link")
      }
     }} /></div>
   
              </div>
             
            </div>
          </div>
        </div>
         

      </div>
      <div className="companydetails-footer"><Footer/></div> 
      </div>
    </div>
  );
};
 
export default CompanyDetails;