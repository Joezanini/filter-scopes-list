import React from 'react';

const CheckboxList = ({ scopes }) => {
  return (
    <div>
      {scopes.map((scope, index) => (
        <div key={index}>
          <input type="checkbox" id={`checkbox-${index}`} />
          <label htmlFor={`checkbox-${index}`}>
            <strong className='scope-name'>{scope.name}</strong>
            <br/>
            <small className='scope-description'>{scope.description}</small>
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxList;