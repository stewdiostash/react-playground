import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Darren", age: 41 },
      { name: "Albert", age: 78 },
    ],
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: "Darren", age: 43 },
        { name: "Albert", age: 79 },
      ],
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "John", age: 29 },
        { name: event.target.value, age: 43 },
        { name: "Albert", age: 79 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "purple",
      color: "white",
      padding: "12px 16px",
      cursor: "pointer",
      borderRadius: "6px",
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App yo</h1>
        <p>This is working!</p>
        <button style={style} onClick={() => this.switchNameHandler("Johnny")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Bart")}
          changed={this.nameChangeHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          Chess Master
        </Person>
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hello")
    // );
  }
}

export default App;
