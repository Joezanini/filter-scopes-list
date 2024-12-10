import React from 'react';
import FilterButton from './components/FilterButton';
import scopes from './scopes';

function App() {

  return (
    <div>
      <h1>Select Scopes:</h1>
      <FilterButton scopes={scopes} />
    </div>
  );
}

export default App;
