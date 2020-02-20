import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogTile from './HogTile';

class App extends Component {
  constructor() {
    super()
    this.state = {
      hogIndex: null,
      greaseFilter: false,
      sortByName: false
    }
  }

  updateHogIndex = (index) => {
    if (index === this.state.hogIndex) {
      this.setState({
        hogIndex: null
      })
    } else {
      this.setState({
        hogIndex: index
      })
    }
  }

  renderHogs = () => {
    let allHogs = [...hogs];
    if (this.state.greaseFilter) {
      allHogs = allHogs.filter(hog => hog.greased)
    }
    if (this.state.sortByName) {
      allHogs = this.sortByName(allHogs)
    }
    if (this.state.sortByWeight) {
      allHogs = allHogs.sort((a, b) => a.weight - b.weight)
    }
    return allHogs.map((hog, index) => {
      return <HogTile
        key={index}
        name={hog.name}
        specialty={hog.specialty}
        weight={hog.weight}
        medal={hog['highest medal achieved']}
        hogIndex={this.state.hogIndex}
        index={index}
        updateHogIndex={this.updateHogIndex}
      />
    })
  }

  sortByName = (allHogs) => {
    return allHogs.sort((a, b) => {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    })
  }

  updateGrease = () => {
    this.setState({
      greaseFilter: !this.state.greaseFilter
    })
  }

  sort = (event) => {
    const value = parseInt(event.target.value, 10)
    if (value === 1) {
      this.updateName()
    } else if (value === 2) {
      this.updateWeight()
    } else {
      this.setState({
        sortByName: false,
        sortByWeight: false
      })
    }

  }

  updateName = () => {
    this.setState({
      sortByName: !this.state.sortByName
    })
  }

  updateWeight = () => {
    this.setState({
      sortByWeight: !this.state.sortByWeight
    })
  }

  render() {
    return (
      <div className="App">
        < Nav />
        <button onClick={this.updateGrease}>Filter by Greased</button>
        <select onChange={this.sort}>
          <option value="0">None</option>
          <option value="1">Sort by Name</option>
          <option value="2">Sort by Weight</option>
        </select>
        <br /> <br />
        <div className="ui grid container">
          {this.renderHogs()}
        </div>
      </div>
    )
  }
}

export default App;
