import React, { useEffect, useState } from 'react';
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

const cache={}

const ProjectsSection = () => {

  const [searchInput,setSearchInput]=useState("")
  const [suggestionList,setSuggestionList]=useState([])

  const [arr,setarr]=useState(new Array(4).fill(""))

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
      const userProject = userProjectQuerySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUserProjectList(userProject);
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

  return (
    <section className="projects-section">
      {console.log(suggestionList)}
    
      <div className="search-bar">
        <input type="text" placeholder="Search Project..." onChange={(e)=>setSearchInput(e.target.value)} />
      </div>
      
      
      <div className='popular-projects'>
        <p>Popular Projects🔥</p>
      <div className='pagination-popular'>
      <ReactPaginate
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageClassName={"page-item"}
        onPageChange={(event) => setPage(event.selected)}
        breakLabel="..."
        pageCount={Math.ceil(userProjectList.length / n)}
        previousLabel={
          <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
            <AiFillLeftCircle/>
          </IconContext.Provider>
        }
        nextLabel={
          <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
            <AiFillRightCircle/>
          </IconContext.Provider>
        }
      />
      </div>
      </div>
      
      <div className='card-list'>
        {
          filterData.length>0 ?(filterData.map((ele,i)=>{
            return <Card key={ele.createdAt} name={ele.name} logo={ele.logo} desc={ele.descr} web={ele.website} requestReceivedCount={requestReceivedCount} requestSentCount={requestSentCount}/>
          })):(arr.map((ele,i)=>{
            return <ShimmerUiCard/>
          }))
        }
      </div>
      
      
     <div style={{display:'flex',justifyContent:'space-between',margin:'5px'}}>
     <p>All Projects </p>
      <div style={{ position: 'relative'  }}>
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
        <div className="modal-content">
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
        
     

      
      <div className='card2-list'>
        {filterData.length>0?(filterData.map((ele, i) => (
          <Card2 key={ele.createdAt} name={ele.name} logo={ele.logo} city={ele.city} desc={ele.descr} requestReceivedCount={requestReceivedCount} requestSentCount={requestSentCount} />
        ))):(arr.map((ele,i)=>{
          return <ShimmerUiCard2/>
        }))}
      </div>
      <ToastContainer/>
    </section>
    
    
  );
};

export default ProjectsSection;
