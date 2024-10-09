import { React, useState,useContext } from 'react';
import './Sidebar.css';
import { CategoryList, EcosystemsList, FundingStageList, LocationList, PartnershipInterestList, ProfileStatusList, RequestTypeList } from './Filterlists';
// Add: Import the FilterContext to use its state and methods
import { FilterContext } from './FilterContext'; 
const Sidebar= () => {
  // Add: Destructure the context state and toggle function
  const { selectedCategories, toggleCategoryS,selectedEcosystems,toggleEcosystemS,selectedFundingStages,toggleFundingStageS,selectedRequestTypes,toggleRequestTypeS,selectedPartenerShipInterests,togglePartnerShipInterestS,selectedLocation,toggleLocationS,selectedProfileStatus,toggleProfileStatusS } = useContext(FilterContext);
 
  const [isProfileExpanded, setProfileExpanded] = useState(true);
  const [isRequestExpanded, setRequestExpanded] = useState(true);
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

      <div className='side-div'>
        <h3 onClick={toggleProfile}  style={{ color: isProfileExpanded ? 'blue' : 'inherit' }}>{isProfileExpanded ? '-' : '+'}Profile Status </h3>
        {isProfileExpanded && (
          ProfileStatusList.map((profileStatus, index) => (
            <div key={profileStatus}>
              <label>
                <input
                  type="checkbox"
                  value={profileStatus}
                  
                  checked={selectedProfileStatus.includes(profileStatus)} 
                  
                  onChange={() => toggleProfileStatusS(profileStatus)} 
                />
                {profileStatus}
              </label>
              <br />
            </div>
          ))
        )}
      </div>


      <div className='side-div'>
        <h3 onClick={toggleRequest } style={{ color: isRequestExpanded ? 'blue' : 'inherit' }}>{isRequestExpanded ? '-' : '+'}Request Type </h3>
        {isRequestExpanded && (
           RequestTypeList.map((requestType, index) => (
            <div key={requestType}>
              <label>
                <input
                  type="checkbox"
                  value={requestType}
                  
                  checked={selectedRequestTypes.includes(requestType)} 
                  
                  onChange={() => toggleRequestTypeS(requestType)} 
                />
                {requestType}
              </label>
              <br />
            </div>
          ))
        )}
      </div>
      <div className='side-div' >
        <h3 onClick={toggleEcoSystem} style={{ color: isEcoSystemExpanded ? 'blue' : 'inherit' }}>{isEcoSystemExpanded ? '-' : '+'}EcoSystem</h3>
        {isEcoSystemExpanded && (
          EcosystemsList.map((ecosystem, index) => (
            <div key={ecosystem}>
              <label>
                <input
                  type="checkbox"
                  value={ecosystem}
                  
                  checked={selectedEcosystems.includes(ecosystem)} 
                  
                  onChange={() => toggleEcosystemS(ecosystem)} 
                />
                {ecosystem}
              </label>
              <br />
            </div>
          ))
        )}
      </div>
      <div className='side-div'>
        <h3 onClick={togglePartenershipInterest}style={{ color: isPartnershipInterestExpanded ? 'blue' : 'inherit' }}>{isPartnershipInterestExpanded ? '-' : '+'}Partnership Interests</h3>
        {isPartnershipInterestExpanded && (
          PartnershipInterestList.map((partenershipInterest, index) => (
            <div key={partenershipInterest}>
              <label>
                <input
                  type="checkbox"
                  value={partenershipInterest}
                  
                  checked={selectedPartenerShipInterests.includes(partenershipInterest)} 
                  
                  onChange={() => togglePartnerShipInterestS(partenershipInterest)} 
                />
                {partenershipInterest}
              </label>
              <br />
            </div>
          ))
        )}
      </div>
      <div className='side-div'>
        <h3 onClick={toggleFundingStage}style={{ color: isFundingStageExpanded ? 'blue' : 'inherit' }}>{isFundingStageExpanded ? '-' : '+'}Funding Stage</h3>
        {isFundingStageExpanded && (
          FundingStageList.map((fundingStages, index) => (
            <div key={fundingStages}>
              <label>
                <input
                  type="checkbox"
                  value={fundingStages}
                  
                  checked={selectedFundingStages.includes(fundingStages)} 
                  
                  onChange={() => toggleFundingStageS(fundingStages)} 
                />
                {fundingStages}
              </label>
              <br />
            </div>
          ))
        )}
      </div>
      <div className='side-div'>
        <h3 onClick={toggleCategory}style={{ color: isCategoryExpanded ? 'blue' : 'inherit' }}>{isCategoryExpanded ? '-' : '+'}Category </h3>
        {isCategoryExpanded && (
         CategoryList.map((category, index) => (
          <div key={category}>
            <label>
              <input
                type="checkbox"
                value={category}
                // Add: Use context state to determine if checkbox is checked
                checked={selectedCategories.includes(category)} 
                // Add: Use toggleCategory function to handle checkbox change
                onChange={() => toggleCategoryS(category)} 
              />
              {category}
            </label>
            <br />
          </div>
        )))}
      </div>
      <div className='side-div'>
        <h3 onClick={toggleLocation}style={{ color: isLocationExpanded ? 'blue' : 'inherit' }}>{isLocationExpanded ? '-' : '+'}Location</h3>
        {isLocationExpanded && (
         LocationList.map((location, index) => (
          <div key={location}>
            <label>
              <input
                type="checkbox"
                value={location}
                
                checked={selectedLocation.includes(location)} 
                
                onChange={() => toggleLocationS(location)} 
              />
              {location}
            </label>
            <br />
          </div>
        ))
        )}
      </div>
    </aside>
  );
};


export default Sidebar;
