// FilterContext.js
import React, { createContext, useState } from 'react';

// Add: Create a context for managing filter states.
export const FilterContext = createContext();

// Add: Define a provider to manage the selected categories.
export const FilterProvider = ({ children }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategoryS = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  return (
    <FilterContext.Provider value={{ selectedCategories, toggleCategoryS }}>
      {children}
    </FilterContext.Provider>
  );
};
