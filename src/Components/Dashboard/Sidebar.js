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
    <img  className="side-img"src={minus} style={{ width: '12.75px', marginRight: '9px', verticalAlign: 'middle' }} />
  ) : (
    <img className="side-img"src={plus} style={{ width: '12.75px', marginRight: '9px', verticalAlign: 'middle' }} />
  )}
  Profile Status
</div >
<div className='side-checkbox-li'>
        {isProfileExpanded && (
          ProfileStatusList.map((profileStatus, index) => (
            <div key={profileStatus}>
              <label >
                <input
                className='check-box'
                  type="checkbox"
                  value={profileStatus}
                  
                  checked={selectedProfileStatus.includes(profileStatus)} 
                  
                  onChange={() => toggleProfileStatusS(profileStatus)} 
                />
                {profileStatus}
              </label>
              
            </div>
          ))
        )}
        </div>
      </div>


      <div className='side-div'>
        <div  className='side-div-data' onClick={toggleRequest } style={{ color: isRequestExpanded ? 'blue' : 'inherit', display: 'flex', alignItems: 'center' }}>{isRequestExpanded ?(
    <img src={minus} style={{ width: '12.75px', marginRight: '9px', verticalAlign: 'middle' }} />
  ) : (
    <img src={plus} style={{ width: '12.75px', marginRight: '9px', verticalAlign: 'middle' }} />
  ) }Request Type </div>
  <div className='side-checkbox-li'>
        {isRequestExpanded && (
           RequestTypeList.map((requestType, index) => (
            <div className='key' key={requestType}>
              <label>
                <input
                className='check-box'
                  type="checkbox"
                  value={requestType}
                  
                  checked={selectedRequestTypes.includes(requestType)} 
                  
                  onChange={() => toggleRequestTypeS(requestType)} 
                />
                {requestType}
              </label>
             
            </div>
          ))
        )}</div>
      </div>
      <div className='side-div' >
        <h3  className='side-div-data' onClick={toggleEcoSystem} style={{ color: isEcoSystemExpanded ? 'blue' : 'inherit',display: 'flex', alignItems: 'center' }}>{isEcoSystemExpanded ?(
    <img src={minus} style={{ width: '12.75px', marginRight: '8px', verticalAlign: 'middle' }} />
  ) : (
    <img src={plus} style={{ width: '12.75px', marginRight: '8px', verticalAlign: 'middle' }} />
  ) }EcoSystem</h3>
   <div className='side-checkbox-li'>
        {isEcoSystemExpanded && (
          EcosystemsList.map((ecosystem, index) => (
            <div key={ecosystem}>
              <label>
                <input
                className='check-box'
                  type="checkbox"
                  value={ecosystem}
                  
                  checked={selectedEcosystems.includes(ecosystem)} 
                  
                  onChange={() => toggleEcosystemS(ecosystem)} 
                />
                {ecosystem}
              </label>
              
            </div>
          ))
        )}</div>
      </div>
      <div className='side-div'>
        <h3   className='side-div-data'onClick={togglePartenershipInterest}style={{ color: isPartnershipInterestExpanded ? 'blue' : 'inherit',display: 'flex', alignItems: 'center' }}>{isPartnershipInterestExpanded ?(
    <img src={minus} style={{ width: '12.75px', marginRight: '8px', verticalAlign: 'middle' }} />
  ) : (
    <img src={plus} style={{ width: '12.75px', marginRight: '8px', verticalAlign: 'middle' }} />
  ) }Partnership Interests</h3>
  <div className='side-checkbox-li'>
        {isPartnershipInterestExpanded && (
          PartnershipInterestList.map((partenershipInterest, index) => (
            <div key={partenershipInterest}>
              <label>
                <input
                className='check-box'
                  type="checkbox"
                  value={partenershipInterest}
                  
                  checked={selectedPartenerShipInterests.includes(partenershipInterest)} 
                  
                  onChange={() => togglePartnerShipInterestS(partenershipInterest)} 
                />
                {partenershipInterest}
              </label>
             
            </div>
          ))
        )}</div>
      </div>
      <div className='side-div'>
        <h3   className='side-div-data'onClick={toggleFundingStage}style={{ color: isFundingStageExpanded ? 'blue' : 'inherit',display:"flex",alignItems:"center" }}>{isFundingStageExpanded ? (
    <img src={minus} style={{ width: '12.75px', marginRight: '8px', verticalAlign: 'middle' }} />
  ) : (
    <img src={plus} style={{ width: '12.75px', marginRight: '8px', verticalAlign: 'middle' }} />
  )}Funding Stage</h3>
  <div className='side-checkbox-li'>
        {isFundingStageExpanded && (
          FundingStageList.map((fundingStages, index) => (
            <div key={fundingStages}>
              <label>
                <input
                className='check-box'
                  type="checkbox"
                  value={fundingStages}
                  
                  checked={selectedFundingStages.includes(fundingStages)} 
                  
                  onChange={() => toggleFundingStageS(fundingStages)} 
                />
                {fundingStages}
              </label>
             
            </div>
          ))
        )} </div>
      </div>
      <div className='side-div'>
        <h3  className='side-div-data' onClick={toggleCategory}style={{ color: isCategoryExpanded ? 'blue' : 'inherit',display:"flex",alignItems:"center" }}>{isCategoryExpanded ? (
    <img src={minus} style={{ width: '12.75px', marginRight: '8px', verticalAlign: 'middle' }} />
  ) : (
    <img src={plus} style={{ width: '12.75px', marginRight: '8px', verticalAlign: 'middle' }} />
  )}Category </h3>
  <div className='side-checkbox-li'>
        {isCategoryExpanded && (
         CategoryList.map((category, index) => (
          <div key={category}>
            <label>
              <input
              className='check-box'
                type="checkbox"
                value={category}
                // Add: Use context state to determine if checkbox is checked
                checked={selectedCategories.includes(category)} 
                // Add: Use toggleCategory function to handle checkbox change
                onChange={() => toggleCategoryS(category)} 
              />
              {category}
            </label>
           
          </div>
        )))}</div>
      </div>
      <div className='side-div'>
        <h3  className='side-div-data' onClick={toggleLocation}style={{ color: isLocationExpanded ? 'blue' : 'inherit',display:"flex",alignItems:"center" }}>{isLocationExpanded ? (
    <img src={minus} style={{ width: '12.75px', marginRight: '9px', verticalAlign: 'middle' }} />
  ) : (
    <img src={plus} style={{ width: '12.75px', marginRight: '9px', verticalAlign: 'middle' }} />
  )}Location</h3>
  <div className='side-checkbox-li'>
        {isLocationExpanded && (
         LocationList.map((location, index) => (
          <div key={location}>
            <label>
              <input
              className='check-box'
                type="checkbox"
                value={location}
                
                checked={selectedLocation.includes(location)} 
                
                onChange={() => toggleLocationS(location)} 
              />
              {location}
            </label>
            
          </div>
        ))
        )}</div>
      </div>
      </div>
    </div>
  );
};


export default Sidebar;
