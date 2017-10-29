import React, { Component } from 'react'

export default class LastIndex extends Component {
    constructor(){
        super()
        this.state={
            str1: '',
            str2: '',
            lastIndex: null
        }
    }
    lastIndexOf(str, findMe){
        var marker = -1
        while(str.indexOf(findMe) !== -1){
            marker += str.indexOf(findMe) +1
            str = str.slice(str.indexOf(findMe)+1)
        }
        return marker
    }
    
    handleClick(){
        this.setState({
            lastIndex: this.lastIndexOf(this.state.str1, this.state.str2),
            str1:'',
            str2:''})
    }
    render(){
        return(
            <div className="puzzleBox">
                <h4>Last Index</h4>
                <h5>Enter two strings. The program will return the last
                    index of the second string in the first. 
                </h5>
                <input className="inputLine" onChange={e=>this.setState({str1:e.target.value})}
                    value={this.state.str1}/>
                <input className="inputLine" onChange={e=>this.setState({str2:e.target.value})}
                    value={this.state.str2} />
                <button className="confirmationButton" onClick={()=>this.handleClick()}>Enter</button>
                <span className="resultsBox">Last Index: {this.state.lastIndex}</span>



            </div>
        )
    }
}