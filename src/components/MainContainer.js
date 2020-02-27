import React, { Component } from 'react';
import '../App.css';
import Hog from './Hog'

class MainContainer extends Component {
  render() {
    return (
      <div className="MainContainer">
          {this.props.hogs.map((hog,i) => <Hog key={i} hog={hog} clickHog={this.props.clickHog} clickedHogs={this.props.clickedHogs}/> )}
      </div>
    )
  }
}

export default MainContainer;
