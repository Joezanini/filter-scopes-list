import React, { useState } from 'react';
import ScopesSearch from './ScopesSearch';
import './ScopesPicker.css'

const ScopesPicker = ({ scopes }) => {
  const [filteredScopes, setFilteredScopes] = useState(scopes);

  const handleFilterChange = (filter) => {
    setFilteredScopes(
      scopes.filter((scope) =>
        scope.name.toLowerCase().includes(filter.toLowerCase())));
  };
  
  return (
    <div>
      <ScopesSearch onChange={handleFilterChange} />
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

export default ScopesPicker;