import React, { useState } from "react";
import Navbar from "../Dashboard/Navbar";
import SortIcon from "../../Images/FilterIcon.png";
import plus from "../../Images/Symbol.png";
import Segmentcontrol from "./Segmentcontrol";
import Sidebar from "../Dashboard/Sidebar";
import { FilterProvider } from "../Dashboard/FilterContext";
import "./RequestPage.css";
import Magnify from '../../Images/Magnify.png';
const RequestPage = ({ selectedFilters }) => {
  const [activeSegment, setActiveSegment] = useState("pending");
  const [searchQuery, setSearchQuery] = useState("");
 
  const [showModal, setShowModal] = useState(false);
  const [sortOptions, setSortOptions] = useState({
    newest: false,
    oldest: false,
    az: false,
    za: false,
  });
 
  const handleSortChange = (e) => {
    const { name, checked } = e.target;
    setSortOptions({ ...sortOptions, [name]: checked });
  };
 
  document.body.style.background = "rgba(234, 239, 255, 1)";
 
  return (
    <div className="request-page-main-container">
      <FilterProvider>
        <Navbar />
        
        <div className="requestpage-container">
        <div className="segmented-control">
          <button
            className={`segment ${activeSegment === "pending" ? "active" : ""}`}
            onClick={() => setActiveSegment("pending")}
          >
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="segment-icon"
            >
              <path d="M7 0.46875C10.7461 0.46875 13.7812 3.50391 13.7812 7.25C13.7812 10.9961 10.7461 14.0312 7 14.0312C3.25391 14.0312 0.21875 10.9961 0.21875 7.25C0.21875 3.50391 3.25391 0.46875 7 0.46875ZM10.9375 8.01562V6.48438C10.9375 6.32031 10.7734 6.15625 10.6094 6.15625H8.09375V3.64062C8.09375 3.47656 7.92969 3.3125 7.76562 3.3125H6.23438C6.04297 3.3125 5.90625 3.47656 5.90625 3.64062V6.15625H3.39062C3.19922 6.15625 3.0625 6.32031 3.0625 6.48438V8.01562C3.0625 8.20703 3.19922 8.34375 3.39062 8.34375H5.90625V10.8594C5.90625 11.0508 6.04297 11.1875 6.23438 11.1875H7.76562C7.92969 11.1875 8.09375 11.0508 8.09375 10.8594V8.34375H10.6094C10.7734 8.34375 10.9375 8.20703 10.9375 8.01562Z" />
            </svg>
            Pending Requests
          </button>
 
          <button
            className={`segment ${activeSegment === "send" ? "active" : ""}`}
            onClick={() => setActiveSegment("send")}
          >
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="segment-icon"
            >
              <path d="M7 0.46875C10.7461 0.46875 13.7812 3.50391 13.7812 7.25C13.7812 10.9961 10.7461 14.0312 7 14.0312C3.25391 14.0312 0.21875 10.9961 0.21875 7.25C0.21875 3.50391 3.25391 0.46875 7 0.46875ZM10.9375 8.01562V6.48438C10.9375 6.32031 10.7734 6.15625 10.6094 6.15625H8.09375V3.64062C8.09375 3.47656 7.92969 3.3125 7.76562 3.3125H6.23438C6.04297 3.3125 5.90625 3.47656 5.90625 3.64062V6.15625H3.39062C3.19922 6.15625 3.0625 6.32031 3.0625 6.48438V8.01562C3.0625 8.20703 3.19922 8.34375 3.39062 8.34375H5.90625V10.8594C5.90625 11.0508 6.04297 11.1875 6.23438 11.1875H7.76562C7.92969 11.1875 8.09375 11.0508 8.09375 10.8594V8.34375H10.6094C10.7734 8.34375 10.9375 8.20703 10.9375 8.01562Z" />
            </svg>{" "}
            Send Requests
          </button>
          <button
            className={`segment ${
              activeSegment === "rejected" ? "active" : ""
            }`}
            onClick={() => setActiveSegment("rejected")}
          >
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="segment-icon"
            >
              <path d="M7 0.46875C10.7461 0.46875 13.7812 3.50391 13.7812 7.25C13.7812 10.9961 10.7461 14.0312 7 14.0312C3.25391 14.0312 0.21875 10.9961 0.21875 7.25C0.21875 3.50391 3.25391 0.46875 7 0.46875ZM10.9375 8.01562V6.48438C10.9375 6.32031 10.7734 6.15625 10.6094 6.15625H8.09375V3.64062C8.09375 3.47656 7.92969 3.3125 7.76562 3.3125H6.23438C6.04297 3.3125 5.90625 3.47656 5.90625 3.64062V6.15625H3.39062C3.19922 6.15625 3.0625 6.32031 3.0625 6.48438V8.01562C3.0625 8.20703 3.19922 8.34375 3.39062 8.34375H5.90625V10.8594C5.90625 11.0508 6.04297 11.1875 6.23438 11.1875H7.76562C7.92969 11.1875 8.09375 11.0508 8.09375 10.8594V8.34375H10.6094C10.7734 8.34375 10.9375 8.20703 10.9375 8.01562Z" />
            </svg>{" "}
            Rejected Requests
          </button>
          <button
            className={`segment ${
              activeSegment === "followup" ? "active" : ""
            }`}
            onClick={() => setActiveSegment("followup")}
          >
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="segment-icon"
            >
              <path d="M7 0.46875C10.7461 0.46875 13.7812 3.50391 13.7812 7.25C13.7812 10.9961 10.7461 14.0312 7 14.0312C3.25391 14.0312 0.21875 10.9961 0.21875 7.25C0.21875 3.50391 3.25391 0.46875 7 0.46875ZM10.9375 8.01562V6.48438C10.9375 6.32031 10.7734 6.15625 10.6094 6.15625H8.09375V3.64062C8.09375 3.47656 7.92969 3.3125 7.76562 3.3125H6.23438C6.04297 3.3125 5.90625 3.47656 5.90625 3.64062V6.15625H3.39062C3.19922 6.15625 3.0625 6.32031 3.0625 6.48438V8.01562C3.0625 8.20703 3.19922 8.34375 3.39062 8.34375H5.90625V10.8594C5.90625 11.0508 6.04297 11.1875 6.23438 11.1875H7.76562C7.92969 11.1875 8.09375 11.0508 8.09375 10.8594V8.34375H10.6094C10.7734 8.34375 10.9375 8.20703 10.9375 8.01562Z" />
            </svg>
            Follow up Requests
          </button>
        </div>
        <div className="sidebar-req-cntainer">
          <Sidebar />
          <div className="requesttable">
            <div className="search-filter">
              <div className="search-bar-req">
              <input className="input-req"
  style={{
    fontSize: "14px",
    fontWeight: "400",
    color: "#282828",
    backgroundImage: `url(${Magnify})`, 
    backgroundRepeat: "no-repeat",
    backgroundPosition: "17px center", // Increased horizontal position to move the icon right
    backgroundSize: "24px 24px", // Set image size to 24x24
    paddingLeft: "55px", // Adjusted padding to maintain space between the image and the text
    height: "40px", // Adjust height to ensure proper alignment
  }} 
  type="text" 
  placeholder="Search Project." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
     
              <div  className="filterdiv">
                
                <div className="requestfilter-icon">
                  <span
                    onClick={() => setShowModal(!showModal)}
                    style={{ cursor: "pointer", fontSize: "2rem" }}
                  >
                    <img src={SortIcon} alt="sort-list" />
                  </span>
                </div>
 
                {/* The modal appearing beside the image */}
                {showModal && (
                  <div className="requestmodal-content">
                    <h4>Sort Options</h4>
                    <label>
                      <input
                        type="checkbox"
                        name="newest"
                        checked={sortOptions.newest}
                        onChange={handleSortChange}
                      />
                      Newest First
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="oldest"
                        checked={sortOptions.oldest}
                        onChange={handleSortChange}
                      />
                      Oldest First
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="az"
                        checked={sortOptions.az}
                        onChange={handleSortChange}
                      />
                      A-Z
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="za"
                        checked={sortOptions.za}
                        onChange={handleSortChange}
                      />
                      Z-A
                    </label>
                  </div>
                )}
              </div>
            </div>
            <Segmentcontrol
              activeSegment={activeSegment}
              sortOptions={sortOptions}
              searchQuery={searchQuery}
            />
          </div>
          </div>
        </div>
      </FilterProvider>
    </div>
  );
};
 
export default RequestPage;