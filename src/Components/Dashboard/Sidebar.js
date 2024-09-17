import { React, useState } from 'react';
import './Sidebar.css';

const Sidebar= () => {

  const [isProfileExpanded, setProfileExpanded] = useState(false);
  const [isRequestExpanded, setRequestExpanded] = useState(false);
  const [isEcoSystemExpanded, setEcosystemExpanded] = useState(false);
  const [isPartnershipInterestExpanded, setPartenershiInterestExpanded] = useState(false);
  const [isFundingStageExpanded, setFundingStageExpanded] = useState(false);
  const [isCategoryExpanded, setCategoryExpanded] = useState(false);
  const [isLocationExpanded, setLocationExpanded] = useState(false);

  
  const toggleProfile = () => setProfileExpanded(!isProfileExpanded);
  const toggleRequest = () => setRequestExpanded(!isRequestExpanded);
  const toggleEcoSystem = () =>setEcosystemExpanded(!isEcoSystemExpanded)
  const togglePartenershipInterest = () => setPartenershiInterestExpanded(!isPartnershipInterestExpanded)
  const toggleFundingStage = () =>setFundingStageExpanded(!isFundingStageExpanded)
  const toggleCategory = () =>setCategoryExpanded(!isCategoryExpanded) 
  const toggleLocation = () =>  setLocationExpanded(!isLocationExpanded)

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
      <div>
        <h3 onClick={toggleEcoSystem}>EcoSystem{isEcoSystemExpanded ? '-' : '+'}</h3>
        {isEcoSystemExpanded && (
          <div>
            <label><input type="checkbox"/></label><br />
            <label><input type="checkbox"/></label><br />
          </div>
        )}
      </div>
      <div>
        <h3 onClick={togglePartenershipInterest}>Partnership Interests {isPartnershipInterestExpanded ? '-' : '+'}</h3>
        {isPartnershipInterestExpanded && (
          <div>
            <label><input type="checkbox"/> </label><br />
            <label><input type="checkbox"/> </label><br />
          </div>
        )}
      </div>
      <div>
        <h3 onClick={toggleFundingStage}>Funding Stage {isFundingStageExpanded ? '-' : '+'}</h3>
        {isFundingStageExpanded && (
          <div>
            <label><input type="checkbox" /> </label><br />
            <label><input type="checkbox" /> </label><br />
          </div>
        )}
      </div>
      <div>
        <h3 onClick={toggleCategory}>Category {isCategoryExpanded ? '-' : '+'}</h3>
        {isCategoryExpanded && (
          <div>
            <label><input type="checkbox" /> </label><br />
            <label><input type="checkbox" /> </label><br />
          </div>
        )}
      </div>
      <div>
        <h3 onClick={toggleLocation}>Location {isLocationExpanded ? '-' : '+'}</h3>
        {isLocationExpanded && (
          <div>
            <label><input type="checkbox" /> </label><br />
            <label><input type="checkbox" /> </label><br />
          </div>
        )}
      </div>
    </aside>
  );
};


export default Sidebar;
