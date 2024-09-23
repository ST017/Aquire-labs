import { React, useState } from 'react';
import './Sidebar.css';
import { CategoryList, EcosystemsList, FundingStageList, LocationList, PartnershipInterestList, ProfileStatusList, RequestTypeList } from './Filterlists';

const Sidebar= () => {
  
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

      <div>
        <h3 onClick={toggleProfile}>{isProfileExpanded ? '-' : '+'}Profile Status </h3>
        {isProfileExpanded && (
          ProfileStatusList.map((ele,i)=>{
            return <div key={ele}>
               <label><input type="checkbox" value={ele}/>{ele}</label><br/>
            </div>
          })
        )}
      </div>


      <div>
        <h3 onClick={toggleRequest}>{isRequestExpanded ? '-' : '+'}Request Type </h3>
        {isRequestExpanded && (
          RequestTypeList.map((ele,i)=>{
            return <div key={ele}>
               <label><input type="checkbox" value={ele}/>{ele}</label><br />
            </div>
          })
        )}
      </div>
      <div>
        <h3 onClick={toggleEcoSystem}>{isEcoSystemExpanded ? '-' : '+'}EcoSystem</h3>
        {isEcoSystemExpanded && (
          EcosystemsList.map((ele,i)=>{
            return <div key={ele}>
              <label><input type="checkbox" value={ele}/>{ele}</label><br />
            </div>
          })
        )}
      </div>
      <div>
        <h3 onClick={togglePartenershipInterest}>{isPartnershipInterestExpanded ? '-' : '+'}Partnership Interests</h3>
        {isPartnershipInterestExpanded && (
          PartnershipInterestList.map((ele,i)=>{
            return <div key={ele}>
               <label><input type="checkbox" value={ele}/>{ele}</label><br />
            </div>
          })
        )}
      </div>
      <div>
        <h3 onClick={toggleFundingStage}>{isFundingStageExpanded ? '-' : '+'}Funding Stage</h3>
        {isFundingStageExpanded && (
          FundingStageList.map((ele,i)=>{
            return <div key={ele}>
               <label><input type="checkbox" value={ele}/>{ele}</label><br />
            </div>
          })
        )}
      </div>
      <div>
        <h3 onClick={toggleCategory}>{isCategoryExpanded ? '-' : '+'}Category </h3>
        {isCategoryExpanded && (
         CategoryList.map((ele,i)=>{
          return <div key={ele}>
             <label><input type="checkbox" value={ele}/>{ele}</label><br />
          </div>
        })
        )}
      </div>
      <div>
        <h3 onClick={toggleLocation}>{isLocationExpanded ? '-' : '+'}Location</h3>
        {isLocationExpanded && (
          LocationList.map((ele,i)=>{
            return <div key={ele}>
               <label><input type="checkbox" value={ele}/>{ele}</label><br />
            </div>
          })
        )}
      </div>
    </aside>
  );
};


export default Sidebar;
