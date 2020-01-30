import React, { Component } from "react";

import TaskItem from "./TaskItem";

class TaskList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">tasks</h3>
          {items.map(item => {
            return (
              <TaskItem
                key={item.id}
                title={item.title}
                handleEdit={() => handleEdit(item.id)}
                handleDelete={() => handleDelete(item.id)}
              />
            );
          })}
          <button
            type="button"
            className="btn btn-danger btn-block text-uppercase my-2"
            onClick={clearList}
          >
            clearlist
          </button>
        </ul>
      </div>
    );
  }
}

export default TaskList;
