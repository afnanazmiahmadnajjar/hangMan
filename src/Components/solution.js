import React, { Component } from "react";
import '../Styles/solution.css'
/* import Letter from "./letter"; */


class Solution extends Component{
    render(){
        return(
            <div>
                <br></br>
                <div>
                    {this.props.solution.secretWord.split("").map(char => {
                       return this.props.letters[char] ? <span key={char} className="solutions">{char} </span> : <span key={char} className="solutions">_</span>
                    })}
                </div>
                <br></br>
                <div>{this.props.solution.hint}</div>
                <br></br>
            </div>
        )
    }
}

export default Solution
