import React, { Component } from 'react';
import Stories from './Stories';
import Foot from './Foot';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Stories />
        <Foot/>
      </div>
    );
  }
}


export default App;
