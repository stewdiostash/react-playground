import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "asdfds", name: "Max", age: 28 },
      { id: "sowadf", name: "Darren", age: 41 },
      { id: "xodfph", name: "Albert", age: 78 },
    ],
    otherState: "some other value",
    showPersons: false,
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

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Members</h1>
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
