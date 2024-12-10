import React, {useState, forwardRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './ScopesSearch.css';
  
const ScopesSearch = forwardRef(({onChange, onFocusChange}, searchRef) => {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
        onChange(event.target.value);
    }

    return (
        <div className='search-container'>
            <input
            className='search'
            type="text"
            value={filter}
            onChange={handleFilterChange}
            onFocus={() => onFocusChange(true)}
            // onBlur={() => onFocusChange(false)}
            ref={searchRef}
            />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
    );
});

export default ScopesSearch;