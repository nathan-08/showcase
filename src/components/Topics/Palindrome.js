import React, { Component } from 'react'

export default class Palindrome extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            palindrome: []
        }
    }
    handleClick() {
        /* is palindrome? */
        
        var entry = this.state.userInput.toLowerCase().split('').reverse().join('')
        this.state.userInput.toLowerCase() === entry ?  
        this.setState({
            palindrome: [...this.state.palindrome, entry + ', '],
            userInput: ''
        }) : this.setState({userInput: ''})
    }
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <h5>Checks user input. If palindrome, adds to list.</h5>
                <input className="inputLine"
                    onChange={e => this.setState({ userInput: e.target.value })}
                    value={this.state.userInput} />
                <button className="confirmationButton"
                    onClick={() => this.handleClick()}>Enter</button>
                <span className="resultsBox">Palindromes: {this.state.palindrome}</span>

            </div>
        )
    }
}