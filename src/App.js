import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <TaskInput />
            </div>

            <div className="col">
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
