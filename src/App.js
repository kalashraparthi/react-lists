import React, { Component } from "react";
import Validation from "./Components/Validation/Validation.jsx";
import Char from "./Components/Char/Char.jsx";
import "./App.css";

class App extends Component {
  state = {
    text: [],
  };

  textChange = (event) => {
    const text = event.target.value;
    this.setState({
      text: text,
    });
  };

  deleteChar = (text) => {
    const textCopy = [...this.state.text];
    const updatedText = textCopy.filter((item) => item !== text).join("");
    this.setState({
      text: updatedText,
    });
  };

  render() {
    const textCopy = [...this.state.text];
    const uniqueChar = [...new Set(textCopy)];
    let char = (
      <div>
        {uniqueChar.map((text) => {
          return <Char click={() => this.deleteChar(text)} text={text} />;
        })}
      </div>
    );

    return (
      <div className="App">
        <h1>React Lists</h1>
        <input
          type="text"
          value={this.state.text}
          onChange={this.textChange}
        ></input>
        <p>{this.state.text}</p>
        <p>{this.state.text.length}</p>
        <Validation length={this.state.text.length} />
        {char}
      </div>
    );
  }
}

export default App;
