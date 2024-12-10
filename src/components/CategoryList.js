import React, { useState } from 'react';

import './CategoryList.css';

const CategoryList = ({ categories, initialSelectedCategories, onSelect }) => {
    const [selectedCategories, setSelectedCategories] = useState(initialSelectedCategories);

    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    return (
        <div className='category-list'>
            <div className='category-list-header'>
                <span>Categories</span>
                <button onClick={() => onSelect(selectedCategories)}>Apply</button>
                <button onClick={() => setSelectedCategories([])}>Clear</button>
            </div>
            {categories.map((category) => (
                <div key={category}>
                    <input
                        type="checkbox"
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                    />
                    <label htmlFor={category}>{category}</label>
                </div>
            ))}
        </div>
    );
};

export default CategoryList;