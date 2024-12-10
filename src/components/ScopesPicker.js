import React, { useState, useRef, useEffect } from 'react';
import ScopesSearch from './ScopesSearch';
import CategoryList from './CategoryList';
import './ScopesPicker.css'

const ScopesPicker = ({ scopes }) => {
  const [filteredScopes, setFilteredScopes] = useState(scopes);
  const [displayCategories, setDisplayCategories] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const uniqueCategories = [...new Set(scopes.map(scope => scope['product_type']).sort())];

  const searchRef = useRef(null);

  const handleSearchChange = (search) => {
    setSearchString(search);
  };

  const handleSearchFocus = (searchFocus) => {
    // Show categories when search input is focused
    setDisplayCategories(searchFocus);
  };

  const handleCategoryChange = (selectedCategories) => {
    setDisplayCategories(false);
    setSelectedCategories(selectedCategories);
  }

  useEffect(() => {
    // Filter scopes based on search string
    let searchFilteredScopes = scopes.filter((scope) =>
      scope.name.toLowerCase().includes(searchString.toLowerCase()));
  // Filter scopes based on selected categories
  searchFilteredScopes = searchFilteredScopes.filter((scope) =>
      selectedCategories.length === 0 || selectedCategories.includes(scope.product_type));
  setFilteredScopes(searchFilteredScopes);
  }, [selectedCategories, searchString, scopes]);
  
  return (
    <div>
      <div>
        <ScopesSearch 
          ref={searchRef}
          onChange={handleSearchChange} 
          onFocusChange={handleSearchFocus} 
        />
      </div>
      {displayCategories && (
        <div style={{
          width: searchRef.current ? searchRef.current.offsetWidth : 'auto',
        }}>
          <CategoryList categories={uniqueCategories} initialSelectedCategories={selectedCategories} onSelect={handleCategoryChange} />
        </div>
      )}
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