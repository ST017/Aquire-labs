import React, { useState } from "react";

import'./Segmentcontrol.css'

const Segmentcontrol = () =>{

    const [activeSegment, setActiveSegment] = useState("pending");

  // Sample data for the tables
  const pendingRequests = [
    { id: 1, name: "PreludeSys", location: "India", type: "Funding", date: "09-12-2024", message: "Last message: 23-10-2024" },
    { id: 2, name: "PreludeSys", location: "Hungary", type: "Listing", date: "09-12-2024", message: "Last message: 23-10-2024" },
    // Add more rows as necessary
  ];

  const sendRequests = [
    { id: 1, name: "PreludeSys", location: "India", type: "Funding", date: "09-12-2024", message: "Last message: 23-10-2024" },
    { id: 2, name: "PreludeSys", location: "Hungary", type: "Listing", date: "09-12-2024", message: "Last message: 23-10-2024" },
    // Add more rows as necessary
  ];

  return (
    <div className="container">
      {/* Segmented Control */}
      <div className="segmented-control">
        <button
          className={`segment ${activeSegment === "pending" ? "active" : ""}`}
          onClick={() => setActiveSegment("pending")}
        >
          Pending Requests
        </button>
        <button
          className={`segment ${activeSegment === "send" ? "active" : ""}`}
          onClick={() => setActiveSegment("send")}
        >
          Send Requests
        </button>
        <button
          className={`segment ${activeSegment === "rejected" ? "active" : ""}`}
          onClick={() => setActiveSegment("rejected")}
        >
          Rejected Requests
        </button>
        <button
          className={`segment ${activeSegment === "followup" ? "active" : ""}`}
          onClick={() => setActiveSegment("followup")}
        >
          Follow up  Requests
        </button>
      </div>

      {/* Conditional Rendering of Tables */}
      <div className="table-container">
     
        {/* Pending request */}
        {activeSegment === "pending" && (
          <table className="request-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name of Project</th>
                <th>Date</th>
                <th>Message</th>
                <th>Location</th>
                <th>Request Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingRequests.map((request) => (
                <tr key={request.id}>
                  <td>{request.id}</td>
                  <td>{request.name}</td>
                  <td>{request.date}</td>
                  <td>{request.message}</td>
                  <td>{request.location}</td>
                  <td>{request.type}</td>
                  <td >
                    <button className="action-btn">Accept</button>
                    <button className="action-btn">Deny</button>
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
                <th>ID</th>
                <th>Name of Project</th>
                <th>Date</th>
                <th>Message</th>
                <th>Location</th>
                <th>Request Type</th>
                {/* <th>Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {sendRequests.map((request) => (
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

{/* rejected request */}
{activeSegment === "rejected" && (
          <table className="request-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name of Project</th>
                <th>Date</th>
                <th>Message</th>
                <th>Location</th>
                <th>Request Type</th>
                {/* <th>Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {sendRequests.map((request) => (
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
              {sendRequests.map((request) => (
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

export default Segmentcontrol