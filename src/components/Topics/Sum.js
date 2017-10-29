import React, { Component } from 'react'

export default class Sum extends Component {
    constructor() {
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    handleClick() {
        this.setState({ 
            sum: this.state.number1 + this.state.number2,
            number1: 0, 
            number2: 0 
        })
    }
    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum </h4>
                <input className="inputLine"
                    onChange={e => this.setState({ number1: +(e.target.value) })}
                    value={this.state.number1} />
                <input className="inputLine"
                    onChange={e => this.setState({ number2: +(e.target.value) })}
                    value={this.state.number2} />
                <button className="confirmationButton"
                    onClick={() => this.handleClick()}>Do the Math!</button>
                <span className="resultsBox">Answer: {this.state.sum} </span>
            </div>
        )
    }
}