import React, { Component } from "react";
import '../Styles/letters.css'


class Letter extends Component{
    
    submitLetter=()=>{
        this.props.submit(this.props.letter)
    }
    render(){
        return(<span onClick={this.submitLetter} id={this.props.letter} className={this.props.status ? "selected" : "available"}>{this.props.letter} </span>)
    }
}

export default Letter
