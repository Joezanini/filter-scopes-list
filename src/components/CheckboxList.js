import React, { useState } from 'react';
import './CheckboxList.css'

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
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={handleFilterChange}
      />
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