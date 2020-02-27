import React, { Component } from 'react';

class Hog extends Component {

    hogFront = (hog) => {
        return (
        <div className="pigTile" onClick={() => this.props.clickHog(hog)}>
            <h1>{this.props.hog.name}</h1>
            <p>This is where the picture should go</p>
        </div>)
    }

    hogBack = (hog) => {
        return (
            <div className="pigTile" onClick={() => this.props.clickHog(hog)}>
            <h1>{this.props.hog.name}</h1>
            <p>Greased: {this.props.hog.greased ? 'Greased' : 'Ungreased'}</p>
            <p>Weight: {this.props.hog.weight}</p>
        </div>)
    }
  
render() {   
    return (
        <div> 
            {this.props.clickedHogs.includes(this.props.hog) ? this.hogBack(this.props.hog) : this.hogFront(this.props.hog)}
        </div>
    )
  }
}

export default Hog;
