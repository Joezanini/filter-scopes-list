import React, { useState } from 'react';
import CheckboxList from './CheckboxList';

const FilterButton = ({ scopes }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Options' : 'Show Options'}
      </button>
      {isVisible && <CheckboxList scopes={scopes} />}
    </div>
  );
};

export default FilterButton;