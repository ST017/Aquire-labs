import React, { useEffect, useState } from "react";
import Navbar from "../Dashboard/Navbar";
import SortIcon from "../../Images/FilterIcon.png";
import plus from "../../Images/Symbol.png";

import Sidebar from "../Dashboard/Sidebar";
import { FilterProvider } from "../Dashboard/FilterContext";
import "./InboxPage.css";
import Magnify from '../../Images/Magnify.png';
import ReactPaginate from "react-paginate";
import { IconContext } from "react-icons/lib";
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import RightArrow from "../../Images/RightArrow.png";
import LeftArrow from "../../Images/LeftArrow.png";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../Firebase/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import InboxSegmentControl from "./InboxSegmentControl";


const InboxPage = () => {
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
    {
      id: 3,
      name: "PreludeSys",
      location: "India",
      type: "Funding",
      date: "09-12-2024",
      message: "Last message: 23-10-2024",
    },
    {
      id: 4,
      name: "PreludeSys",
      location: "Hungary",
      type: "Listing",
      date: "09-12-2024",
      message: "Last message: 23-10-2024",
    },
    {
      id: 5,
      name: "PreludeSys",
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


  const sendRequests = [
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

  const rejectRequests = [
    {
      id: 1,
      name: "Reject",
      location: "India",
      type: "Funding",
      date: "09-12-2024",
      message: "Last message: 23-10-2024",
    },
    {
      id: 2,
      name: "Rejectall",
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
  


  const [currentUser, setCurrentUser] = useState(null);
  const [userConnectsList, setUserConnectsList] = useState([]);
  const [matchingPendingRequests, setMatchingPendingRequests] = useState([]);
  const [matchingSendRequests, setMatchingSendRequests] = useState([]);
  const [matchingRejectedRequests, setMatchingRejectedRequests] = useState([]);
  const [samplePendingList,setSamplePendingList]=useState(pendingRequests)
  const [sampleFilterPendingList,setSampleFilterPendingList]=useState([])
  const [sampleSendList,setSampleSendList]=useState(sendRequests)
  const [sampleFilterSendList,setSampleFilterSendList]=useState([])
  const [sampleRejectList,setSampleRejectList]=useState(rejectRequests)
  const [sampleFilterRejectList,setSampleFilterRejectList]=useState([])

  const [activeSegment, setActiveSegment] = useState("pending");
  const [searchQuery, setSearchQuery] = useState("");
  //page
  const[pendingPage,setPendingPage]=useState(0)
  const [sendPage,setSendPage]=useState(0)
  const [rejectPage,setRejectPage]=useState(0)
 
  const [showModal, setShowModal] = useState(false);
  const [sortOptions, setSortOptions] = useState({
    newest: false,
    oldest: false,
    az: false,
    za: false,
  });


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
        (ele) => ele.toUserId === currentUser?.uid && ele.status === "Pending"
      );

      const matchingRejectedRequests = userConnectsList.filter(
        (ele) =>
          (/* ele.toUserId === currentUser?.uid || */
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

  /* useEffect(() => {
    fetchUserConnects();
  }, [db, currentUser?.uid]); */
 
  const handleSortChange = (e) => {
    const { name, checked } = e.target;
    setSortOptions({ ...sortOptions, [name]: checked });
  };

 /*  useEffect(()=>{
    setSampleFilterPendingList(
      matchingPendingRequests.filter((item, index) => {
        return (index >= pendingPage * 10) & (index < (pendingPage + 1) * 10);
      })
    );
  },[matchingPendingRequests,pendingPage]) */

 /*  useEffect(()=>{
    setSampleFilterSendList(
      matchingSendRequests.filter((item, index) => {
        return (index >= sendPage * 10) & (index < (sendPage + 1) * 10);
      })
    );
  },[matchingSendRequests,sendPage])

  useEffect(()=>{
    setSampleFilterRejectList(
      matchingRejectedRequests.filter((item, index) => {
        return (index >= rejectPage * 10) & (index < (rejectPage + 1) * 10);
      })
    );
  },[matchingRejectedRequests,rejectPage]) */
 
 
  document.body.style.background = "rgba(234, 239, 255, 1)";
 
  return (
    <div className="request-page-main-container">
      <FilterProvider>
        <div className="request-page-navbar"><Navbar /></div>
        
        <div className="requestpage-container">
        
        <div className="sidebar-req-cntainer">
          <div className="requestpage-sidebar"><Sidebar /></div>
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
  placeholder="search project..." 
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
                   /* <div className="requestmodal-content">
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
                  </div>  */
                  <div className="requestmodal-content">
  <h4>Sort Options</h4>
  <label className="checkbox-label">
    <input className="input-request-checkbox"
      type="checkbox"
      name="newest"
      checked={sortOptions.newest}
      onChange={handleSortChange}
    />
    Newest First
  </label>
  <label className="checkbox-label">
    <input className="input-request-checkbox"
      type="checkbox"
      name="oldest"
      checked={sortOptions.oldest}
      onChange={handleSortChange}
    />
    Oldest First
  </label>
  <label className="checkbox-label">
    <input className="input-request-checkbox"
      type="checkbox"
      name="az"
      checked={sortOptions.az}
      onChange={handleSortChange}
    />
    A-Z
  </label>
  <label className="checkbox-label">
    <input className="input-request-checkbox"
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
            <InboxSegmentControl/>
            <div className="pagination-request">
            <ReactPaginate
    containerClassName={"pagination-container-request"}
    activeClassName={"active-request"}
    pageClassName={"page-item-request"}
    breakLabel="..."
    onPageChange={(event) => setPendingPage(event.selected)}
    pageCount={Math.ceil(matchingPendingRequests.length/10)}
    previousLabel={
      <div className="arrow-request-paginate">
        <IconContext.Provider value={{ color: "grey", size: "25px" }}>
          <img src={LeftArrow} alt="left-arrow"/>
        </IconContext.Provider>
      </div>
    }
    nextLabel={
      <div className="arrow-request-paginate">
        <IconContext.Provider value={{ color: "grey", size: "25px" }}>
         <img src={RightArrow} alt="right-arrow"/>
        </IconContext.Provider>
      </div>
    }
  />
  
</div>

          </div>
          </div>
        </div>
      </FilterProvider>
    </div>
  );
};
 
export default InboxPage;