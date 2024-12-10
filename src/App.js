import React from 'react';
import ScopesPicker from './components/ScopesPicker';
import scopes from './scopes';

import './App.css';

function App() {

  return (
    <div className='App'>
      <div className='row'>
        <div className='info'>
          <span>Scopes</span>
          <div>
            <p>
            Scopes define the level of access that your integration requires.
            </p>
            <p>
              <a href="https://developer.webex.com/docs/integrations#scopes">Learn more</a>
            </p>
          </div>
        </div>
        <div className='col'>
          <ScopesPicker scopes={scopes} />
        </div>
      </div>
    </div>
  );
}

export default App;
