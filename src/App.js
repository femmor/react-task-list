import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "Wake up"
      },
      {
        id: 2,
        title: "Make breakfast"
      },
      {
        id: 3,
        title: "Go to work"
      }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    console.log("handle change");
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("handle submit");
  };

  clearList = () => {
    console.log(`clear list`);
  };

  handleDelete = id => {
    console.log(`handle delete, ${id}`);
  };

  handleEdit = id => {
    console.log(`handle edit, ${id}`);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-center text-capitalize">task list</h3>
              <TaskInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
            </div>

            <TaskList
              items={this.state.items}
              clearList={this.clearList}
              id={this.state.id}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
