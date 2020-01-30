import React, { Component } from "react";

class TaskItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item my-2 d-flex justify-content-between text-capitalize">
        <h6>{title}</h6>
        <div className="task-icons">
          <span className="mx-2" onClick={handleEdit}>
            <i className="fas fa-pen text-success"></i>
          </span>
          <span className="mx-2" onClick={handleDelete}>
            <i className="fas fa-trash text-danger"></i>
          </span>
        </div>
      </li>
    );
  }
}

export default TaskItem;
