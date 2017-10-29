/*TODO
allow user to specify this.state.givenString
*/

import React, { Component } from 'react'

export default class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            unfilteredArray: ['opple, ', 'bonano, ', 'oronge, '],
            userInput: '',
            filteredArray: [],
            givenString: 'opple'
        }
    }
    handleClick() {
        this.setState({
            filteredArray: 
            this.state.unfilteredArray.filter(e => ( e.indexOf(this.state.givenString) === -1)),
            userInput: ''
        })
    }
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">
                    Original: {this.state.unfilteredArray}</span>
                <input className="inputLine"
                    onChange={e => this.setState({ userInput: e.target.value })}
                    value={this.state.userInput} />
                <button className="confirmationButton"
                    onClick={() => this.handleClick()}>Filter {this.state.givenString}s</button>
                <span className="resultsBox filterStringRB">Filtered: {this.state.filteredArray}</span>
            </div>
        )
    }
}