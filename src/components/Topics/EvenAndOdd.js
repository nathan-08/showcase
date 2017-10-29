import React, { Component } from 'react'

export default class EvenAndOdd extends Component {
    constructor(){
        super()
        this.state={
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    handleClick(){
        var even = []
        var odd = []
        this.state.userInput.split(',').map(e=>{
            (e%2===0) ? even.push(e, ', ') : odd.push(e, ', ') 
        })
        this.setState({evenArray: even, oddArray: odd, userInput: ''})
    }
    render(){
        return(
            <div className="puzzleBox EvenAndOddPB">
                <h4>Evens and Odds</h4>
                <p>Enter a series of numbers, separated by a comma, to be sorted.</p>
                <input className="inputLine" value={this.state.userInput} onChange={
                    e=>this.setState({userInput: e.target.value})
                } />
                <button className="confirmationButton" onClick={
                    ()=>this.handleClick()}>Sort</button>
                <span className="resultsBox">Evens: {this.state.evenArray}</span>
                <span className="resultsBox">Odds:  {this.state.oddArray} </span>
            </div>
        )
    }
}