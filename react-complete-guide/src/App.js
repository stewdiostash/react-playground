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

  switchNameHandler = () => {
    console.group("Was clicked!");
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App yo</h1>
        <p>This is working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
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
