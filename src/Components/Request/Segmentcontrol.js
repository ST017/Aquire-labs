import React, { useState, useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import "./Segmentcontrol.css";
import { db } from "../Firebase/firebase";
import { FilterContext } from "../Dashboard/FilterContext";
import Message from "./Message";

import Raisa from "../../Images/1.png"
import RequestMessage from "./RequestMessage";


const Segmentcontrol = ({ activeSegment, sortOptions, searchQuery,fetchUserConnects,matchingPendingRequests,matchingRejectedRequests,matchingSendRequests,sample,sampleSend,sampleReject }) => {
  // const [activeSegment, setActiveSegment] = useState("pending");

  

  const { selectedRequestTypes } = useContext(FilterContext);

  

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



  //handling accept and deny

  const handleAccept = async (docid) => {
    await updateDoc(doc(db, "UserConnects", docid), {
      status: "Accepted",
      lastCreatedAt: serverTimestamp(),
    });
    await fetchUserConnects();
    alert("Request has been accepted!");
  };

  const handleDeny = async (docid) => {
    await updateDoc(doc(db, "UserConnects", docid), {
      status: "Denied",
      lastCreatedAt: serverTimestamp(),
    });
    await fetchUserConnects();
    alert("Request has been rejected!");
  };

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
              {sortRequests(
                filterByRequestTypes(filterRequests(/* matchingPendingRequests */  sample))
              ).map((request, i) => (
                <tr key={request.id}>

  <td className="id-request" style={{ textAlign: "center", verticalAlign: "middle" }}>
    {String(i+1).padStart(3, '0')} 
    

  </td>
  
  <td
    
  >
    <div className="name-request-pending"
    style={{ display: "flex", alignItems: "center", verticalAlign: "middle" }}>
     <img
      src={request.profilePicture}
      alt="profile-pic"
      style={{
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        marginRight: "4px",
      }}
    /> 


      {request.name}
    </div>
  </td>
  
  <td className="date-request-pending" style={{ textAlign: "center", verticalAlign: "middle" }}>
      {/* {new Date(request.lastCreatedAt.seconds * 1000)
      .toLocaleDateString()
      .replace(/\//g, "-")} */}  {/* {new Date(request.lastCreatedAt.seconds * 1000).toLocaleDateString()} */} {request.date}
  </td>
  
  <td className="message-request-pending" style={{ textAlign: "center", verticalAlign: "middle" }}>
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
    <img className="msg-image-request-pending"
      src={request.profilePicture}
      alt="profile-pic"
    />
    <div className="below-message-container-pending">
      <span>{request.message}</span>
     {/*  <p className="below-message-pending">Last Message-about {<RequestMessage request={request}/>} at {request.createdAt}</p> */}
    </div>
  </div>
</td>
 
  
  <td className="location-request-pending" style={{ textAlign: "center", verticalAlign: "middle" }}>
    {request.location}  
  </td>
  
  <td className="requestType-request-pending" style={{ textAlign: "center", verticalAlign: "middle" }}>
  {/*  {request?.requestTypes.join(", ")}  */}  {request.requestTypes}
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
     {
      request.status==="Pending"?(<>
       <button className="request-page-accept-button-pending" onClick={()=>handleAccept(request.id)}>
      Accept
    </button>
    <button className="request-page-decline-button-pending" onClick={()=>handleDeny(request.id)}>
      Decline
    </button>
      </>):(<>
        <button className="request-page-accept-button-pending" disabled
  style={{
    opacity: 0.5, // Optional: Visual effect when disabled
    cursor: "not-allowed"
  }} >
      Accept
    </button>
    <button className="request-page-decline-button-pending" disabled
  style={{
    opacity: 0.5, // Optional: Visual effect when disabled
    cursor: "not-allowed"
  }}>
      Decline
    </button>
      </>)
     }

   
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
                filterByRequestTypes(filterRequests(sampleSend))
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


     {/* {request.toname}  */} {request.name}

    </div>
  </td>
  
  <td className="date-request" style={{ textAlign: "center", verticalAlign: "middle" }}>

    {/*  {new Date(request.lastCreatedAt.seconds * 1000)
      .toLocaleDateString()
      .replace(/\//g, "-")}  */}
  </td>
  
  <td className="message-request" style={{ textAlign: "center", verticalAlign: "middle" }}>
  {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
    <img className="msg-image-request"
      src={request?.toprofilePicture}
      alt="profile-pic"
    />
    <div className="below-message-container">
      <span>{request.message}</span>
      <p className="below-message">{<RequestMessage request={request}/>} at { new Date(request.createdAt.seconds * 1000)
      .toLocaleDateString()
      .replace(/\//g, "-")}</p>
    </div>
  </div> */}
</td>
 
  
  <td className="location-request" style={{ textAlign: "center", verticalAlign: "middle" }}>
     {/* {request.tolocation} */} 
  </td>
  
  <td className="requestType-request" style={{ textAlign: "center", verticalAlign: "middle" }}>
   {/*  {request?.requestTypes.join(", ")} */} 
  </td>

  <td className="status-request" style={{ textAlign: "center", verticalAlign: "middle" }}>
   {/*  {request?.status} */}
  </td>


  <td className="action-button-request" style={{ textAlign: "center", verticalAlign: "middle", padding: "0" }}>
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
    
      <button className="request-page-cancel-button" onClick={()=>handleCancelRequest(request.id)}>
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
              {sortRequests(
                filterByRequestTypes(filterRequests(sampleReject))
              )?.map((request, i) =>(
                <tr key={request.id}>

  <td className="id-request" style={{ textAlign: "center", verticalAlign: "middle" }}>
    {String(i+1).padStart(3, '0')} 
    

  </td>
  
  <td
    
  >
    <div className="name-request-rejected"
    style={{ display: "flex", alignItems: "center", verticalAlign: "middle" }}>
     {/* <img
      src={request?.toprofilePicture}
      alt="profile-pic"
      style={{
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        marginRight: "4px",
      }}
    />  */}


{/* {request.toname} */} {request.name}
    </div>
  </td>
  
  <td className="date-request-rejected" style={{ textAlign: "center", verticalAlign: "middle" }}>
     {/*  {new Date(request.lastCreatedAt.seconds * 1000)
      .toLocaleDateString()
      .replace(/\//g, "-")}  */}  
  </td>
  
  <td className="message-request-rejected" style={{ textAlign: "center", verticalAlign: "middle" }}>
  {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
    <img className="msg-image-request-rejected"
      src={request?.toprofilePicture}
      alt="profile-pic"
    />
    <div className="below-message-container-rejected">
      <span>{request.message}</span>
      <p className="below-message">Last Message-about {<RequestMessage request={request}/>} at {request.createdAt}</p>
    </div>
  </div> */}
</td>
 
  
  <td className="location-request-rejected" style={{ textAlign: "center", verticalAlign: "middle" }}>
  {/* {request.tolocation} */}
  </td>
  
  <td className="requestType-request-rejected" style={{ textAlign: "center", verticalAlign: "middle" }}>
  {/* {request?.requestTypes.join(", ")}  */}
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

