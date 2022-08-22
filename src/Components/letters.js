import React, { Component } from "react";
import Letter from './letter'


class Letters extends Component{
    render(){
        return(
            <div>
                <div>available letters</div>
                <br></br>
                <div className="letters">
                   {Object.keys(this.props.letters).map((char) =>{
                       return <Letter key={char} submit={this.props.submit} letter={char} status={this.props.letters[char]} />
                   })}
              </div> 
            </div>
        )
    }
}

export default Letters