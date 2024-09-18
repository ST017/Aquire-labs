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

const ProjectsSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [sortOptions, setSortOptions] = useState({
    newest: false,
    oldest: false,
    az: false,
    za: false,
  });
  const [userProjectList, setUserProjectList] = useState([]);

  // Fetch the user projects from Firestore
  const fetchUserProjectData = async () => {
    const UserProjectQuery = query(collection(db, "UserProject"));
    const userProjectQuerySnapshot = await getDocs(UserProjectQuery);
    const userProject = userProjectQuerySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setUserProjectList(userProject);
  };

  useEffect(() => {
    fetchUserProjectData();
  }, []);

  const handleSortChange = (e) => {
    const { name, checked } = e.target;
    setSortOptions({ ...sortOptions, [name]: checked });
  };

  const applySorting = () => {
    let sortedList = [...userProjectList];
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

    setUserProjectList(sortedList);
    setShowModal(false); 
  };

  return (
    <section className="projects-section">
    
      <div className="search-bar">
        <input type="text" placeholder="Search Project..." />
      </div>
      
      
      <div className='popular-projects'>
        <p>Popular Projects🔥</p>
      </div>

      
      <div className='card-list'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
     
      
        <div style={{display:"flex",justifyContent:'flex-end',marginRight:"5px"}}>
        <span onClick={() => setShowModal(!showModal)} style={{ cursor: 'pointer', fontSize: '2rem',}}>
          <img src={SortIcon} alt='sort-list'/>
        </span>
        {showModal && (
          <div className="modal">
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
          </div>
        )}
        </div>
       
     

      
      <div className='card2-list'>
        {userProjectList.map((ele, i) => (
          <Card2 key={ele.createdAt} name={ele.name} logo={ele.logo}/>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
