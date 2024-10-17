import React, { useState, useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

import "./Segmentcontrol.css";
import { db } from "../Firebase/firebase";
import { FilterContext } from "../Dashboard/FilterContext";
import Message from "./Message";
import Raisa from "../../Images/1.png"

const Segmentcontrol = ({ activeSegment, sortOptions, searchQuery }) => {
  // const [activeSegment, setActiveSegment] = useState("pending");
  const [currentUser, setCurrentUser] = useState(null);
  const [userConnectsList, setUserConnectsList] = useState([]);
  const [matchingPendingRequests, setMatchingPendingRequests] = useState([]);
  const [matchingSendRequests, setMatchingSendRequests] = useState([]);
  const [matchingRejectedRequests, setMatchingRejectedRequests] = useState([]);

  const { selectedRequestTypes } = useContext(FilterContext);

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

  // Sort the filtered requests
  const sortRequests = (requests) => {
    let sortedRequests = [...requests];

    if (sortOptions.newest) {
      sortedRequests.sort(
        (a, b) => b.createdAt?.seconds - a.createdAt?.seconds
      );
    }

    if (sortOptions.oldest) {
      sortedRequests.sort(
        (a, b) => a.createdAt?.seconds - b.createdAt?.seconds
      );
    }

    if (sortOptions.az) {
      sortedRequests.sort((a, b) => {
        const nameA = a.name || ""; // Default to an empty string if undefined
        const nameB = b.name || ""; // Default to an empty string if undefined
        return nameA.localeCompare(nameB);
      });
    }

    if (sortOptions.za) {
      sortedRequests.sort((a, b) => {
        const nameA = a.name || ""; // Default to an empty string if undefined
        const nameB = b.name || ""; // Default to an empty string if undefined
        return nameB.localeCompare(nameA);
      });
    }

    return sortedRequests;
  };

  // Filter requests based on search query
  const filterRequests = (requests) => {
    return requests.filter(
      (request) =>
        (request?.name?.toLowerCase() || "").includes(
          searchQuery.toLowerCase()
        ) ||
        (request?.message?.toLowerCase() || "").includes(
          searchQuery.toLowerCase()
        )
    );
  };

  // Filter requests based on selected request types
  const filterByRequestTypes = (requests) => {
    if (selectedRequestTypes.length > 0) {
      return requests.filter(
        (request) =>
          request?.requestTypes?.length > 0 && // Check if requestTypes exists and is not empty
          request.requestTypes.some((type) =>
            selectedRequestTypes.includes(type)
          )
      );
    } else {
      return requests;
    }
  };

  // Fetch userConnects data
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

      // Filter to find all matches where toUserId equals currentUser.uid and status==="pending"
      const matchingPendingRequests = userConnectsList.filter(
        (ele) => ele.toUserId === currentUser?.uid && ele.status === "pending"
      );

      const matchingRejectedRequests = userConnectsList.filter(
        (ele) =>
          (ele.toUserId === currentUser?.uid ||
            ele.userId === currentUser?.uid) &&
          ele.status === "Denied"
      );

      // Filter to find all matches where userId equals currentUser.uid
      const matchingSendRequests = userConnectsList.filter(
        (ele) => ele.userId === currentUser?.uid
      );

      setMatchingPendingRequests(matchingPendingRequests);
      setMatchingSendRequests(matchingSendRequests);
      setMatchingRejectedRequests(matchingRejectedRequests);
    } catch (e) {
      alert("Error fetching Data");
      return [];
    }
  };

  useEffect(() => {
    fetchUserConnects();
  }, [db, currentUser?.uid]);

  //handling accept and deny

  const handleAccept = async (docid) => {
    await updateDoc(doc(db, "UserConnects", docid), {
      status: "Accepted",
    });
    await fetchUserConnects();
    alert("Request has been accepted!");
  };

  const handleDeny = async (docid) => {
    await updateDoc(doc(db, "UserConnects", docid), {
      status: "Denied",
    });
    await fetchUserConnects();
    alert("Request has been rejected!");
  };

  // Sample data for the tables
  const pendingRequests = [
    {
      id: 1,
      name: "PreludeSys",
      location: "India",
      type: "Funding",
      date: "09-12-2024",
      message: "Last message: 23-10-2024",
    },
    {
      id: 2,
      name: "PreludeSys",
      location: "Hungary",
      type: "Listing",
      date: "09-12-2024",
      message: "Last message: 23-10-2024",
    },
    // Add more rows as necessary
  ];

  const RejectDummyRequests = [
    {
      id: 1,
      name: "testdemo",
      location: "India",
      type: "Listing",
      date: "10-12-2024",
      message: "Hi I am test demo",
    },
    {
      id: 2,
      name: "PreludeSys",
      location: "Hungary",
      type: "Listing",
      date: "09-12-2024",
      message: "This is test demo2",
    },
    // Add more rows as necessary
  ];

  return (
    <div className="Requestcontainer">
      {/* Segmented Control */}

      {/* Conditional Rendering of Tables */}
      <div className="table-container">
        {/* Pending request */}
        {activeSegment === "pending" && (
          <table className="request-table">
            <thead>
              <tr>
              <th  style={{ textAlign: "center", verticalAlign: "middle" }}>ID</th>
                <th style={{ textAlign: "center", verticalAlign: "middle"}} >Name of Project</th>
                <th  style={{ textAlign: "center", verticalAlign: "middle"}}>Last Updated</th>
                <th  style={{ textAlign: "center", verticalAlign: "middle" }}>Message</th>
                <th  style={{ textAlign: "center", verticalAlign: "middle"}}>Location</th>
                <th  style={{ textAlign: "center", verticalAlign: "middle" }}>Request Type</th>
               <th  style={{ textAlign: "center", verticalAlign: "middle" }}>Actions</th> 
              </tr>
            </thead>
            <tbody>
              {/* sortRequests(
                filterByRequestTypes(filterRequests(matchingPendingRequests))
              ) */RejectDummyRequests.map((request, i) => (
                <tr key={request.id}>
  <td className="id-request" style={{ textAlign: "center", verticalAlign: "middle" }}>
    {String(i+1).padStart(3, '0')} 
    

  </td>
  
  <td
    
  >
    <div className="name-request-pending"
    style={{ display: "flex", alignItems: "center", verticalAlign: "middle" }}>
     <img
      src={Raisa}
      alt="profile-pic"
      style={{
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        marginRight: "4px",
      }}
    /> 


     {/* {request.toname} */} {request.name}
    </div>
  </td>
  
  <td className="date-request-pending" style={{ textAlign: "center", verticalAlign: "middle" }}>
     {/* {new Date(request.createdAt.seconds * 1000)
      .toLocaleDateString()
      .replace(/\//g, "-")}  */} {request.date}
  </td>
  
  <td className="message-request-pending" style={{ textAlign: "center", verticalAlign: "middle" }}>
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
    <img className="msg-image-request-pending"
      src={Raisa}
      alt="profile-pic"
    />
    <div className="below-message-container-pending">
      <span>{request.message}</span>
      <p className="below-message-pending">last updated</p>
    </div>
  </div>
</td>
 
  
  <td className="location-request-pending" style={{ textAlign: "center", verticalAlign: "middle" }}>
     {/* {request.tolocation}  */}Dummy Location
  </td>
  
  <td className="requestType-request-pending" style={{ textAlign: "center", verticalAlign: "middle" }}>
    {/* {request?.requestTypes.join(", ")}  */} Dummy Request Type
  </td>


  {/* <td className="action-button-request-pending" style={{ textAlign: "center", verticalAlign: "middle", padding: "0" }}>
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
    <button className="request-page-cancel-button-pending">
      Cancel
    </button>
  </div>
</td> */}
<td className="action-button-request-pending" style={{ textAlign: "center", verticalAlign: "middle", padding: "0" }}>
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", gap: "5px" }}>
    <button className="request-page-accept-button-pending">
      Accept
    </button>
    <button className="request-page-decline-button-pending">
      Decline
    </button>
  </div>
</td>




</tr>

              ))}
            </tbody>
          </table>
        )}

        {/* sending request */}

        {activeSegment === "send" && (
          <table className="request-table">
            <thead>
              <tr>
                <th  style={{ textAlign: "center", verticalAlign: "middle" }}>ID</th>
                <th style={{ textAlign: "center", verticalAlign: "middle"}} >Name of Project</th>
                <th  style={{ textAlign: "center", verticalAlign: "middle"}}>Last Updated</th>
                <th  style={{ textAlign: "center", verticalAlign: "middle" }}>Message</th>
                <th  style={{ textAlign: "center", verticalAlign: "middle"}}>Location</th>
                <th  style={{ textAlign: "center", verticalAlign: "middle" }}>Request Type</th>
                <th  style={{ textAlign: "center", verticalAlign: "middle" }}>Status</th> 
               <th  style={{ textAlign: "center", verticalAlign: "middle" }}>Actions</th> 

                {/* <th>Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {sortRequests(
                filterByRequestTypes(filterRequests(matchingSendRequests))
              )?.map((request, i) => (
                <tr key={request.id}>

  <td className="id-request" style={{ textAlign: "center", verticalAlign: "middle" }}>
    {String(i+1).padStart(3, '0')} 
    

  </td>
  
  <td
    
  >
    <div className="name-request"
    style={{ display: "flex", alignItems: "center", verticalAlign: "middle" }}>
     <img
      src={request?.toprofilePicture}
      alt="profile-pic"
      style={{
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        marginRight: "4px",
      }}
    /> 


     {request.toname} 
    </div>
  </td>
  
  <td className="date-request" style={{ textAlign: "center", verticalAlign: "middle" }}>
     {new Date(request.createdAt.seconds * 1000)
      .toLocaleDateString()
      .replace(/\//g, "-")} 
  </td>
  
  <td className="message-request" style={{ textAlign: "center", verticalAlign: "middle" }}>
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
    <img className="msg-image-request"
      src={request?.toprofilePicture}
      alt="profile-pic"
    />
    <div className="below-message-container">
      <span>{request.message}</span>
      <p className="below-message">last updated</p>
    </div>
  </div>
</td>
 
  
  <td className="location-request" style={{ textAlign: "center", verticalAlign: "middle" }}>
     {request.tolocation} 
  </td>
  
  <td className="requestType-request" style={{ textAlign: "center", verticalAlign: "middle" }}>
    {request?.requestTypes.join(", ")} 
  </td>

  <td className="status-request" style={{ textAlign: "center", verticalAlign: "middle" }}>
    hardcoded-pending
  </td>


  <td className="action-button-request" style={{ textAlign: "center", verticalAlign: "middle", padding: "0" }}>
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
    <button className="request-page-cancel-button">
      Cancel
    </button>
  </div>
</td>



</tr>


              ))}
            </tbody>
          </table>
        )}

        {/* rejected request */}
        {activeSegment === "rejected" && (
          <table className="request-table">
            <thead>
              <tr>
              <th  style={{ textAlign: "center", verticalAlign: "middle" }}>ID</th>
                <th style={{ textAlign: "center", verticalAlign: "middle"}} >Name of Project</th>
                <th  style={{ textAlign: "center", verticalAlign: "middle"}}>Last Updated</th>
                <th  style={{ textAlign: "center", verticalAlign: "middle" }}>Message</th>
                <th  style={{ textAlign: "center", verticalAlign: "middle"}}>Location</th>
                <th  style={{ textAlign: "center", verticalAlign: "middle" }}>Request Type</th>
              </tr>
            </thead>
            <tbody>
              {/* sortRequests(
                filterByRequestTypes(filterRequests(matchingRejectedRequests))
              )? */   RejectDummyRequests.map((request, i) =>(
                <tr key={request.id}>
  <td className="id-request" style={{ textAlign: "center", verticalAlign: "middle" }}>
    {String(i+1).padStart(3, '0')} 
    

  </td>
  
  <td
    
  >
    <div className="name-request-rejected"
    style={{ display: "flex", alignItems: "center", verticalAlign: "middle" }}>
     <img
      src={Raisa}
      alt="profile-pic"
      style={{
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        marginRight: "4px",
      }}
    /> 


     {/* {request.toname} */} {request.name}
    </div>
  </td>
  
  <td className="date-request-rejected" style={{ textAlign: "center", verticalAlign: "middle" }}>
     {/* {new Date(request.createdAt.seconds * 1000)
      .toLocaleDateString()
      .replace(/\//g, "-")}  */}  {request.date}
  </td>
  
  <td className="message-request-rejected" style={{ textAlign: "center", verticalAlign: "middle" }}>
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
    <img className="msg-image-request-rejected"
      src={Raisa}
      alt="profile-pic"
    />
    <div className="below-message-container-rejected">
      <span>Hi this is demo message</span>
      <p className="below-message">last updated</p>
    </div>
  </div>
</td>
 
  
  <td className="location-request-rejected" style={{ textAlign: "center", verticalAlign: "middle" }}>
     dummy location
  </td>
  
  <td className="requestType-request-rejected" style={{ textAlign: "center", verticalAlign: "middle" }}>
    dummy request type
  </td>




</tr>

              ) )}
            </tbody>
          </table>
        )}

        {/* Follow request */}

        {activeSegment === "followup" && (
          <table className="request-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name of Project</th>
                <th>Date</th>
                <th>Message</th>
                <th>Location</th>
                <th>Request Type</th>
                <th>Follow-up</th>
              </tr>
            </thead>
            <tbody>
              {sortRequests(RejectDummyRequests)?.map((request) => (
                <tr key={request.id}>
                  <td>{request.id}</td>
                  <td>{request.name}</td>
                  <td>{request.date}</td>
                  <td>{request.message}</td>
                  <td>{request.location}</td>
                  <td>{request.type}</td>
                  {/* <td>
                    <button className="action-btn">Request Sent</button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Segmentcontrol;