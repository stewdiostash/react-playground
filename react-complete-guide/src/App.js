import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Darren", age: 41 },
      { name: "Albert", age: 78 },
    ],
  });

  const [otherState, setOtherState] = useState("some other value");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    console.group("Was clicked!");
    setPersonsState({
      persons: [
        { name: "Max", age: 29 },
        { name: "Darren", age: 43 },
        { name: "Albert", age: 79 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App yo</h1>
      <p>This is working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
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
};

export default app;
