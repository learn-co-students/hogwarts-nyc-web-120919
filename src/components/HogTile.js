import React, { Component } from 'react'
import HogDescription from './HogDescription'

export default class HogTile extends Component {
    constructor() {
        super()
        this.state = {
            hide: false
        }
    }

    showDesc = () => {
        if (this.props.index === this.props.hogIndex) {
            return <HogDescription 
                specialty={this.props.specialty}
                weight={this.props.weight}
                medal={this.props.medal}
            />
        }
    }

    hide = () => {
        this.setState({
            hide: true
        })
    }

    render() {
        return (
            <div className={`ui eight wide column ${this.state.hide ? 'hidden' : ''}`} onClick={() => this.props.updateHogIndex(this.props.index)}>
                <div className="pigTile">
                    {this.props.name}
                    <br />
                    <img src={`./hog-imgs/${this.props.name.toLowerCase().split(' ').join('_')}.jpg`} alt='pig' />
                    {this.showDesc()}
                    <button onClick={this.hide}>Hide</button>
                </div>
            </div>
        )
    }
}