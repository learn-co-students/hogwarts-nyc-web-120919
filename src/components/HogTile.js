import React from 'react'


class HogTile extends React.Component{

    state = {
        displayHog: true
      }
    
      clickFunction = () => {
        this.setState({
          displayHog: !this.state.displayHog
        })
        console.log(this.state.displayHog)
      }
    
    render(){
        return(
        <div onClick={this.clickFunction} className='pigTile'><h1>{this.props.name}</h1>
        {this.state.displayHog ? <h2>{this.props.specialty}</h2> : null}</div>
        )
    }
}

export default HogTile