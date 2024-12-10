import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import CheckboxList from './CheckboxList';

const FilterButton = ({ scopes }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility} style={{ display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faFilter} style={{ marginRight: '8px' }} />
        {isVisible ? 'Hide Options' : 'Show Options'}
      </button>
      {isVisible && <CheckboxList scopes={scopes} />}
    </div>
  );
};

export default FilterButton;