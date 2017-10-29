/* TODO:
allow user to specify property or property-value-pair to filter by.
utilize JSON.stringify replacer function
*/


import React, { Component } from 'react'

export default class FilterObject extends Component {
    constructor(){
        super()
        this.state={
            unfilteredArray: [
                {type: 'opple', quality: 'rare', color: 'golden'},
                {type: 'oronge', quality: 'common', color: 'bright-orange'},
                {type: 'bunch of grapes', hasSeeds: 'true', color: 'deep-purple'},
                {type: 'bonano', quality: 'ultra-rare', color: 'golden-red'}
            ],
            userInput: '',
            filteredArray: [],
            givenProperty: 'hasSeeds' /* filter out objects having this property */
            
        }
    }
    handleClick(){
        this.setState({ filteredArray:
        this.state.unfilteredArray.filter( e=> !e[this.state.givenProperty]),
        userInput: ''
        })
    }
    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                {/* <h5>filters out objects with property: {this.state.givenProperty}</h5> */}
                <span   className="puzzleText">
                    Original: {JSON.stringify(this.state.unfilteredArray, null, 10)}
                </span>
                <input  className="inputLine"
                onChange={e=>this.setState({userInput: e.target.value})}
                value={this.state.userInput}/>
                <button className="confirmationButton"
                    onClick={()=>this.handleClick()}>
                    Filter out objects with property: {this.state.givenProperty}</button>
                <span   className="resultsBox filterObjectRB">
                    Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}
                </span>


            </div>
        )
    }
}