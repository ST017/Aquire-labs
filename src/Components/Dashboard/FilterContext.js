// FilterContext.js
import React, { createContext, useState } from 'react';

// Add: Create a context for managing filter states.
export const FilterContext = createContext();

// Add: Define a provider to manage the selected categories.
export const FilterProvider = ({ children }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedEcosystems,setSelectedEcosystems]=useState([])
  const [selectedFundingStages,setSelectedFundingStages]=useState([])
  const [selectedRequestTypes,setSelectedRequestTypes]=useState([])
  const [selectedPartenerShipInterests,setSelectedPartnerShipInterests]=useState([])
  const [selectedLocation,setSelectedLocation]=useState([])
  const [selectedProfileStatus,setSelectedProfileStatus]=useState([])

  const toggleCategoryS = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };
  const toggleEcosystemS = (ecosystem) => {
    setSelectedEcosystems((prev) =>
      prev.includes(ecosystem)
        ? prev.filter((item) => item !== ecosystem)
        : [...prev, ecosystem]
    );
  }
  const toggleFundingStageS = (fundingStages) => {
    setSelectedFundingStages((prev) =>
      prev.includes(fundingStages)
        ? prev.filter((item) => item !== fundingStages)
        : [...prev, fundingStages]
    );
  }
  const toggleRequestTypeS = (requestType) => {
    setSelectedRequestTypes((prev) =>
      prev.includes(requestType)
        ? prev.filter((item) => item !== requestType)
        : [...prev, requestType]
    );
  }
  const togglePartnerShipInterestS = (partenershipInterest) => {
    setSelectedPartnerShipInterests((prev) =>
      prev.includes(partenershipInterest)
        ? prev.filter((item) => item !== partenershipInterest)
        : [...prev, partenershipInterest]
    );
  }
  const toggleLocationS = (location) => {
    setSelectedLocation((prev) =>
      prev.includes(location)
        ? prev.filter((item) => item !== location)
        : [...prev, location]
    );
  }
  const toggleProfileStatusS = (profileStatus) => {
    setSelectedProfileStatus((prev) =>
      prev.includes(profileStatus)
        ? prev.filter((item) => item !== profileStatus)
        : [...prev, profileStatus]
    );
  }


  return (
    <FilterContext.Provider value={{ selectedCategories, toggleCategoryS,selectedEcosystems,toggleEcosystemS,selectedFundingStages,toggleFundingStageS,selectedRequestTypes,toggleRequestTypeS,selectedPartenerShipInterests,togglePartnerShipInterestS,selectedLocation,toggleLocationS,selectedProfileStatus,toggleProfileStatusS}}>
      {children}
    </FilterContext.Provider>
  );
};
