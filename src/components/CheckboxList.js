import React, { useState } from 'react';
import './CheckboxList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const CheckboxList = ({ scopes }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredScopes = scopes.filter((scope) =>
    scope.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <div className='search-container'>
        <input
          className='search'
          type="text"
          value={filter}
          onChange={handleFilterChange}
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
    <div>
      {filteredScopes.map((scope, index) => (
        <div key={index}>
          <input type="checkbox" id={`checkbox-${index}`} />
          <label htmlFor={`checkbox-${index}`}>
            <strong className='scope-name'>{scope.name}</strong>
            <br/>
            <small className='scope-description'>&emsp;&ensp;&nbsp;{scope.description}</small>
          </label>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CheckboxList;