import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
// showing vs-code github setup

// Components
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <TaskInput />
            <TaskList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
