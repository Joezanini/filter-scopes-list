import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './ScopesSearch.css';

const ScopesSearch = ({onChange}) => {
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
            />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
    );
};

export default ScopesSearch;