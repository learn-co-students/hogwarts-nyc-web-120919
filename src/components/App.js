import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogTile from './HogTile';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        < Nav />
        {hogs.map((hog, index) => (
          <HogTile 
            {...hog}
            key={index}
          />
        )
        )}
      </div>
    )
  }
}

export default App;
