import React, { useContext, useEffect, useState } from 'react';
import './ProjectsSection.css';
import Card from './Card';
import Card2 from './Card2';
import SortIcon from '../../Images/FilterIcon.png';
import './Modal.css';
import {
  collection,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from '../Firebase/firebase';
import "./style.css";
import ReactPaginate from 'react-paginate';
import { IconContext } from 'react-icons';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import {
  where,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import ShimmerUiCard from './ShimmerUiCard';
import ShimmerUiCard2 from './ShimmerUiCard2';
// Add: Import the FilterContext to access the selected categories
import { FilterContext } from './FilterContext'; 
import CompanyDetails from '../ComapanyDetails';

const cache={}

const ProjectsSection = () => {

  const [searchInput,setSearchInput]=useState("")
  const [suggestionList,setSuggestionList]=useState([])

  const [arr,setarr]=useState(new Array(4).fill(""))
  const [requestSent, setRequestSent] = useState(0);
  const [requestReceived, setRequestReceived] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [sortOptions, setSortOptions] = useState({
    newest: false,
    oldest: false,
    az: false,
    za: false,
  });
  const [userProjectList, setUserProjectList] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [requestReceivedCount, setRequestReceivedCount] = useState(0);
  const [requestSentCount, setRequestSentCount] = useState(0);

  const [selectedProject, setSelectedProject] = useState(null); // State to track the selected card

  // Function to handle when a card is clicked
  const handleCardClick = (project) => {
    // Save project data to localStorage or sessionStorage
    localStorage.setItem('selectedProject', JSON.stringify(project));
    console.log("clicked")
    
    // Open the new page in a new tab
    window.open('/companydetails', '_blank');
  };
  

  
   // Add: Use the context to access selected categories
   const { selectedCategories,selectedEcosystems,selectedFundingStages,selectedRequestTypes,selectedPartenerShipInterests,selectedLocation,selectedProfileStatus } = useContext(FilterContext); 

  //Debounce and AutoSuggestion
  
  const getData=async()=>{
    if(cache[searchInput]){
      setSuggestionList(cache[searchInput])
    }
    else{
      const res=await fetch(`https://www.google.com/complete/search?client=firefox&q=${searchInput}`)
      const data=await res.json()
      //console.log(data[1])
      cache[searchInput]=data[1]
      setSuggestionList(cache[searchInput])
    }
     
  }
  useEffect(()=>{
    const timer=setTimeout(()=>{
       getData()
    },200)
     return ()=>clearTimeout(timer)
  },[searchInput])

 


  // Fetch the user projects from Firestore
  const fetchUserProjectData = async () => {
    try{
      const UserProjectQuery = query(collection(db, "UserProject"));
      const userProjectQuerySnapshot = await getDocs(UserProjectQuery);
      if(userProjectQuerySnapshot){
        const userProject = userProjectQuerySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUserProjectList(userProject);
      }
      
    }
    catch(error){
      toast.error(error,{position:"top-center"})
    };
    
    
    
  };

  useEffect(() => {
    fetchUserProjectData();
  }, [db]);

 
  

  // Fetch Request Received Count
  const fetchRequestReceivedCount = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if(user){
      const receivedQuery = query(
        collection(db, "ConnectionReq"), 
        where("toUserId", "==", user.uid)
      );
      const receivedSnapshot = await getDocs(receivedQuery);
      setRequestReceivedCount(receivedSnapshot.size); // Set count of received requests
    }
   
    
  };

  // Fetch Request Sent Count
  const fetchRequestSentCount = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if(user){
      const sentQuery =  query(
        collection(db, "ConnectionReq"), 
        where("fromUserId", "==", user.uid)
      );
      const sentSnapshot = await getDocs(sentQuery);
      setRequestSentCount(sentSnapshot.size); // Set count of sent requests
    }

    
    
  };

  useEffect(() => {
    fetchRequestReceivedCount();
    fetchRequestSentCount();
  }, [db]);

  // Update Filter Data when searchInput changes
  const handleSearch = (e) => {
    const val = e.target.value;
    setSearchInput(val);
  
    if (val) {
      // Filter the projects based on the search input
      const filteredProjects = userProjectList.filter((project) =>
        project.name.toLowerCase().includes(val.toLowerCase())
      );
      setFilterData(filteredProjects);
    } else {
      // Show data for the first page when input is cleared
      setPage(0); // Reset to the first page
      setFilterData(
        userProjectList.filter((item, index) => {
          return index >= 0 && index < n; // Show items for page 1
        })
      );
    }
  };
  


  //Pagination
  const n = 4;
  const [page, setPage] = useState(0);
  
  
  

  useEffect(() => {
    setFilterData(
      userProjectList.filter((item, index) => {
        return (index >= page * n) & (index < (page + 1) * n);
      })
    );
  }, [userProjectList,page]);

  const handleSortChange = (e) => {
    const { name, checked } = e.target;
    setSortOptions({ ...sortOptions, [name]: checked });
  };

  const applySorting = () => {
    let sortedList = [...filterData];
    if (sortOptions.newest) {
      sortedList.sort((a, b) => b.createdAt - a.createdAt);
    }
    if (sortOptions.oldest) {
      sortedList.sort((a, b) => a.createdAt - b.createdAt);
    }
    if (sortOptions.az) {
      sortedList.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortOptions.za) {
      sortedList.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilterData(sortedList);
    setShowModal(false); 
  };


 //FilterCategory
 /*  useEffect(() => {
    // Add: Handle logic to display default data when no category is selected
    if (selectedCategories.length === 0) { 
      setPage(page); // Reset to the first page
      
      setFilterData(
        userProjectList.filter((item, index) => {
          return (index >= page * n) & (index < (page + 1) * n);
        })
      );
    } else {
      // Add: Filter projects based on selected categories
      const filteredProjects = userProjectList.filter((project) => 
        selectedCategories.includes(project.category) 
      );
      setFilterData(filteredProjects);
    }
  }, [userProjectList, selectedCategories, page]); */ 
  useEffect(() => {
    const filteredProjects = userProjectList.filter((project) => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(project.category);
      const ecosystemMatch = selectedEcosystems.length === 0 || selectedEcosystems.includes(project.blockchain);
      const fundingstageMatch = selectedFundingStages.length === 0 || selectedFundingStages.includes(project.fundingStatus);
      const requesttypeMatch = selectedRequestTypes.length === 0 || selectedRequestTypes.includes(project.requestType);
      //const profileStatusMatch = selectedProfileStatus.length === 0 || selectedProfileStatus.includes(project.);
      const locationMatch = selectedLocation.length === 0 || selectedLocation.includes(project.country);
      const partnershipinterestMatch = selectedPartenerShipInterests.length === 0 || selectedPartenerShipInterests.includes(project.partnershipInterest);
     
      return categoryMatch && ecosystemMatch && fundingstageMatch && requesttypeMatch && locationMatch && partnershipinterestMatch
    });
  
    setFilterData(
      filteredProjects.filter((item, index) => {
        return (index >= page * n) & (index < (page + 1) * n);
      })
    );
  }, [userProjectList, selectedCategories, selectedEcosystems, page, n]);
  

  return (
    <section className="projects-section">
    
    
      <div className="search-bar">
        <input type="text" placeholder="Search Project..." onChange={handleSearch} />
      </div>
      
      <div className='popular-pagination-heading'>
      <div className='popular-projects'>
       <div className="pp"> Popular Projects🔥</div>
      
      </div>
      <div className='pagination-popular'>
      <ReactPaginate
  containerClassName={"pagination"}
  activeClassName={"active"}
  pageClassName={"page-item"}
  onPageChange={(event) => setPage(event.selected)}
  breakLabel="..."
  pageCount={Math.ceil(userProjectList.length / n)}
  previousLabel={
    <div className="arrow">
      <IconContext.Provider value={{ color: "#FFFFFF", size: "36px" }}>
        <AiFillLeftCircle />
      </IconContext.Provider>
    </div>
  }
  nextLabel={
    <div className="arrow">
      <IconContext.Provider value={{ color: "#FFFFFF", size: "36px" }}>
        <AiFillRightCircle />
      </IconContext.Provider>
    </div>
  }
/>

      </div>
      </div>
      <div className='card-list1'>
        {
          filterData.length>0 ?(filterData.map((ele,i)=>{
            return <Card onClick={() =>handleCardClick(ele)} key={ele.createdAt} name={ele.name} logo={ele.profilePicture} desc={ele.descr} web={ele.website} userId={ele.userId}/>
          })):(arr.map((ele,i)=>{
            return <ShimmerUiCard/>
          }))
        }
      </div>
      
      
     <div style={{display:'flex',justifyContent:'space-between',margin:'5px'}}>
     <p>All Projects </p>
      <div >
      {/* The clickable image */}
      <div className='filter-icon'>
        <span
          onClick={() => setShowModal(!showModal)}
          style={{ cursor: 'pointer', fontSize: '2rem' }}
        >
          <img src={SortIcon} alt='sort-list' />
        </span>
      </div>

      {/* The modal appearing beside the image */}
      {showModal && (
        <div className="filtermodal-content">
          <h4>Sort Options</h4>
          <label>
            <input type="checkbox" name="newest" checked={sortOptions.newest} onChange={handleSortChange} />
            Newest First
          </label>
          <label>
            <input type="checkbox" name="oldest" checked={sortOptions.oldest} onChange={handleSortChange} />
            Oldest First
          </label>
          <label>
            <input type="checkbox" name="az" checked={sortOptions.az} onChange={handleSortChange} />
            A-Z
          </label>
          <label>
            <input type="checkbox" name="za" checked={sortOptions.za} onChange={handleSortChange} />
            Z-A
          </label>
          <button onClick={applySorting}>Apply Sorting</button>
        </div>
      )}
    </div>
          
        
    </div>
        
     

      <div className="card2list-pagination-all">
      <div className='card2-list'>
        {filterData.length>0?(filterData.map((ele, i) => (
          <Card2 onClick={() =>handleCardClick(ele)} key={ele.createdAt} name={ele.name} logo={ele.profilePicture} city={ele.city} desc={ele.descr} userId={ele.userId} />
        ))):(arr.map((ele,i)=>{
          return <ShimmerUiCard2/>
        }))} 
        
      </div> 

      <div className='pagination-all-projects'>
      <ReactPaginate
  containerClassName={"pagination"}
  activeClassName={"active"}
  pageClassName={"page-item"}
  onPageChange={(event) => setPage(event.selected)}
  breakLabel="..."
  pageCount={Math.ceil(userProjectList.length / n)}
  previousLabel={
    <div className="arrow">
      <IconContext.Provider value={{ color: "#FFFFFF", size: "36px" }}>
        <AiFillLeftCircle />
      </IconContext.Provider>
    </div>
  }
  nextLabel={
    <div className="arrow">
      <IconContext.Provider value={{ color: "#FFFFFF", size: "36px" }}>
        <AiFillRightCircle />
      </IconContext.Provider>
    </div>
  }
/>

</div>
      </div>
      <ToastContainer/>
    </section>
    
    
  );
};

export default ProjectsSection;
