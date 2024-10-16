import { React, useState,useContext } from 'react';
import './Sidebar.css';
import { CategoryList, EcosystemsList, FundingStageList, LocationList, PartnershipInterestList, ProfileStatusList, RequestTypeList } from './Filterlists';
// Add: Import the FilterContext to use its state and methods
import { FilterContext } from './FilterContext'; 
import plus from "../../Images/plus.png";
import minus from "../../Images/minus.png";
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
    <div className='side-container'>
      <div className="side-sub-container">
      <div className='side-div'>
      <div className='side-div-data' onClick={toggleProfile} style={{ color: isProfileExpanded ? 'blue' : 'inherit', display: 'flex', alignItems: 'center' }}>
  {isProfileExpanded ? (
    <img  className="side-img"src={minus} style={{ width: '12.75px', marginRight: '8px', verticalAlign: 'middle' }} />
  ) : (
    <img src={plus} style={{ width: '12.75px', marginRight: '8px', verticalAlign: 'middle' }} />
  )}
  Profile Status
</div>

        {isProfileExpanded && (
          ProfileStatusList.map((profileStatus, index) => (
            <div key={profileStatus}>
              <label style={{fontSize:"12px",fontWeight:"600"}}>
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
        <h3 onClick={toggleRequest } style={{ color: isRequestExpanded ? 'blue' : 'inherit', display: 'flex', alignItems: 'center' }}>{isRequestExpanded ?(
    <img src={minus} style={{ width: '12.75px', marginRight: '8px', verticalAlign: 'middle' }} />
  ) : (
    <img src={plus} style={{ width: '12.75px', marginRight: '8px', verticalAlign: 'middle' }} />
  ) }Request Type </h3>
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
        <h3 onClick={toggleEcoSystem} style={{ color: isEcoSystemExpanded ? 'blue' : 'inherit',display: 'flex', alignItems: 'center' }}>{isEcoSystemExpanded ?(
    <img src={minus} style={{ width: '12.75px', marginRight: '8px', verticalAlign: 'middle' }} />
  ) : (
    <img src={plus} style={{ width: '12.75px', marginRight: '8px', verticalAlign: 'middle' }} />
  ) }EcoSystem</h3>
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
        <h3 onClick={togglePartenershipInterest}style={{ color: isPartnershipInterestExpanded ? 'blue' : 'inherit',display: 'flex', alignItems: 'center' }}>{isPartnershipInterestExpanded ?(
    <img src={minus} style={{ width: '12.75px', marginRight: '8px', verticalAlign: 'middle' }} />
  ) : (
    <img src={plus} style={{ width: '12.75px', marginRight: '8px', verticalAlign: 'middle' }} />
  ) }Partnership Interests</h3>
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
        <h3 onClick={toggleFundingStage}style={{ color: isFundingStageExpanded ? 'blue' : 'inherit',display:"flex",alignItems:"center" }}>{isFundingStageExpanded ? (
    <img src={minus} style={{ width: '12.75px', marginRight: '8px', verticalAlign: 'middle' }} />
  ) : (
    <img src={plus} style={{ width: '12.75px', marginRight: '8px', verticalAlign: 'middle' }} />
  )}Funding Stage</h3>
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
        <h3 onClick={toggleCategory}style={{ color: isCategoryExpanded ? 'blue' : 'inherit',display:"flex",alignItems:"center" }}>{isCategoryExpanded ? (
    <img src={minus} style={{ width: '12.75px', marginRight: '8px', verticalAlign: 'middle' }} />
  ) : (
    <img src={plus} style={{ width: '12.75px', marginRight: '8px', verticalAlign: 'middle' }} />
  )}Category </h3>
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
        <h3 onClick={toggleLocation}style={{ color: isLocationExpanded ? 'blue' : 'inherit',display:"flex",alignItems:"center" }}>{isLocationExpanded ? (
    <img src={minus} style={{ width: '12.75px', marginRight: '8px', verticalAlign: 'middle' }} />
  ) : (
    <img src={plus} style={{ width: '12.75px', marginRight: '8px', verticalAlign: 'middle' }} />
  )}Location</h3>
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
      </div>
    </div>
  );
};


export default Sidebar;
