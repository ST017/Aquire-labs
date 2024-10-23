import React, { useState, useEffect, useContext } from "react";

import "./InboxSegmentControl.css";

import Raisa from "../../Images/1.png"



const InboxSegmentcontrol = () => {
  

  const DummyRequests = [

    {
        id: 1,
        name: "send",
        location: "India",
        type: "Funding",
        date: "09-12-2024",
        message: "Last message: 23-10-2024",
      },
      {
        id: 2,
        name: "PreludeSys Sen2",
        location: "Hungary",
        type: "Listing",
        date: "09-12-2024",
        message: "Last message: 23-10-2024",
      },
      {
        id: 3,
        name: "udeSys",
        location: "India",
        type: "Funding",
        date: "09-12-2024",
        message: "Last message: 23-10-2024",
      },
      {
        id: 4,
        name: "PrelSys",
        location: "Hungary",
        type: "Listing",
        date: "09-12-2024",
        message: "Last message: 23-10-2024",
      },
      {
        id: 5,
        name: "send",
        location: "India",
        type: "Funding",
        date: "09-12-2024",
        message: "Last message: 23-10-2024",
      },
      {
        id: 6,
        name: "PreludeSys",
        location: "Hungary",
        type: "Listing",
        date: "09-12-2024",
        message: "Last message: 23-10-2024",
      },
      {
        id: 7,
        name: "PreludeSys",
        location: "India",
        type: "Funding",
        date: "09-12-2024",
        message: "Last message: 23-10-2024",
      },
      {
        id: 8,
        name: "PreludeSys",
        location: "Hungary",
        type: "Listing",
        date: "09-12-2024",
        message: "Last message: 23-10-2024",
      },
      {
        id: 9,
        name: "PreludeSys",
        location: "India",
        type: "Funding",
        date: "09-12-2024",
        message: "Last message: 23-10-2024",
      },
      {
        id: 10,
        name: "PreludeSys",
        location: "Hungary",
        type: "Listing",
        date: "09-12-2024",
        message: "Last message: 23-10-2024",
      },
      {
        id: 11,
        name: "PreludeSys",
        location: "India",
        type: "Funding",
        date: "09-12-2024",
        message: "Last message: 23-10-2024",
      },
      {
        id: 12,
        name: "PreludeSys",
        location: "Hungary",
        type: "Listing",
        date: "09-12-2024",
        message: "Last message: 23-10-2024",
      },
      {
        id: 13,
        name: "PreludeSys",
        location: "India",
        type: "Funding",
        date: "09-12-2024",
        message: "Last message: 23-10-2024",
      },
      {
        id: 14,
        name: "PreludeSys",
        location: "Hungary",
        type: "Listing",
        date: "09-12-2024",
        message: "Last message: 23-10-2024",
      },
      {
        id: 15,
        name: "PreludeSys",
        location: "India",
        type: "Funding",
        date: "09-12-2024",
        message: "Last message: 23-10-2024",
      },
    // Add more rows as necessary
  ];

  return (
    <div className="Requestcontainer">
      <div className="table-container">
          <table className="request-table">
            <thead>
              <tr>

                <th  style={{ textAlign: "center", verticalAlign: "middle" }}>ID</th>
                <th style={{ textAlign: "center", verticalAlign: "middle"}} >Name of Project</th>
                <th  style={{ textAlign: "center", verticalAlign: "middle"}}>Last Updated</th>
                <th  style={{ textAlign: "center", verticalAlign: "middle" }}>Message</th>
                <th  style={{ textAlign: "center", verticalAlign: "middle"}}>Location</th>
                <th  style={{ textAlign: "center", verticalAlign: "middle" }}>Request Type</th>
                {/* <th  style={{ textAlign: "center", verticalAlign: "middle" }}>Additional Notes</th> */} 
               
              </tr>
            </thead>
            <tbody>
              {DummyRequests.map((request, i) => (
                <tr key={request.id}>


  <td className="id-request" style={{ textAlign: "center", verticalAlign: "middle" }}>
    {String(i+1).padStart(3, '0')} 
    


  </td>
  
  <td
    
  >
    <div className="name-request"
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


      {request.name}  

    </div>
  </td>
  
  <td className="date-request" style={{ textAlign: "center", verticalAlign: "middle" }}>

      {request.date}
  </td>
  


<td className="message-request">
  <div style={{ display: "flex", alignItems: "center", verticalAlign: "middle" }}>
    <img
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "200px",
        marginRight: "37px",
      }}
      src={Raisa}
      alt="profile-pic"
    />
    <div>
      <span>
        {request.message.length > 50
          ? `${request.message.slice(0, 50)}...`
          : request.message}
      </span>
      <p style={{ margin: 0, }} className="below-message">Last Message-about 23 hours at 23-10-2024</p>
    </div>
  </div>
</td>


 
  
  <td className="location-request" style={{ textAlign: "center", verticalAlign: "middle" }}>
     {request.location} 
  </td>
  
  <td className="requestType-request" style={{ textAlign: "center", verticalAlign: "middle" }}>
    {request.type} 
  </td>

  

</tr>



   
              ))}
            </tbody>
          </table>
        

       

        
      </div>
    </div>
  );
};


export default InboxSegmentcontrol;

