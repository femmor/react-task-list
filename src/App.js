import React, { Component } from "react";
import "./App.css";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });
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
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-8 mx-auto mt-5">
              <h3 className="text-center text-capitalize">task list</h3>
              <TaskInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
            </div>
            <div className="col-8 mx-auto mt=5">
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
      </div>
    );
  }
}

export default App;
