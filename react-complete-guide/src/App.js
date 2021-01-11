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
    otherState: "some other value",
    showPersons: false,
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Name list</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          {this.state.showPersons ? "Hide Names" : "Show Names"}
        </button>
        {persons}
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
