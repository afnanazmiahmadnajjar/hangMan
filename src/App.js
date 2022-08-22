import './App.css';
import Letters from './Components/letters'
import Score from './Components/Score'
import Solution from './Components/solution'
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        secretWord: "BYTES",
        hint: "test hint"
      },
      score: 100,
    }
  }


  selectedLetter = (key) => {
    let newLetterStatus = Object.assign({}, this.state.letterStatus);
    newLetterStatus[key] = true
    this.setState({
      letterStatus: newLetterStatus
    })
    let newScore = this.state.score
    if (this.state.solution.secretWord.includes(key)) {
      newScore = newScore + 5
      this.setState({
        score: newScore
      },function(){
        if(this.checkIfCompleteSecretWord()){
          alert("Congratulations")
        }
      })
    } else {
      newScore = newScore - 20
      this.setState({
        score: newScore
      })
    }
  }

  checkIfCompleteSecretWord = () => {
    let secretWord = this.state.solution.secretWord
    let letters = this.state.letterStatus
    let Count = 0
    for (let i = 0; i < secretWord.length; i++) {
      if (letters[secretWord[i]] !== false) { Count++ }
    }
    if(Count === secretWord.length){ return true}
    return false
  }

  generateLetterStatuses = () => {
    let lettersObj = {}
    for (let i = 65; i < 91; i++) {
      lettersObj[String.fromCharCode(i)] = false
    }
    return lettersObj
  }
  render() {
    return (
      <div className="App">
        <Score score={this.state.score} />
        <Solution solution={this.state.solution} letters={this.state.letterStatus} />
        <Letters submit={this.selectedLetter} letters={this.state.letterStatus} />
      </div>
    );
  }
}

export default App;
