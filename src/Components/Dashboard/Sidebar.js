import { React, useState } from 'react';
import './Sidebar.css';

const Sidebar= () => {

  const [isProfileExpanded, setProfileExpanded] = useState(false);
  const [isRequestExpanded, setRequestExpanded] = useState(false);

  
  const toggleProfile = () => setProfileExpanded(!isProfileExpanded);
  const toggleRequest = () => setRequestExpanded(!isRequestExpanded);

  return (
    <aside className='side-content'>

      <div>
        <h3 onClick={toggleProfile}>Profile Status {isProfileExpanded ? '-' : '+'}</h3>
        {isProfileExpanded && (
          <div>
            <label><input type="checkbox" /> Email Verified</label><br />
            <label><input type="checkbox" /> TG Verified</label><br />
          </div>
        )}
      </div>


      <div>
        <h3 onClick={toggleRequest}>Request Type {isRequestExpanded ? '-' : '+'}</h3>
        {isRequestExpanded && (
          <div>
            <label><input type="checkbox" /> Technical Collaboration</label><br />
            <label><input type="checkbox" /> Funding</label><br />
            <label><input type="checkbox" /> Listing</label><br />
            <label><input type="checkbox" /> Marketing</label><br />
            <label><input type="checkbox" /> Integrations</label><br />
            <label><input type="checkbox" /> Community Building</label><br />
            <label><input type="checkbox" /> Explore</label><br />
          </div>
        )}
      </div>
    </aside>
  );
};


export default Sidebar;
