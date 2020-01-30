import React, { Component } from "react";

class TaskInput extends Component {
  render() {
    const { item, editItem, handleChange, handleSubmit } = this.props;

    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <div
                  className={
                    editItem
                      ? "input-group-text bg-success"
                      : "input-group-text bg-primary"
                  }
                >
                  <i className="fas fa-book text-white"></i>
                </div>
              </div>
              <input
                type="text"
                name={item}
                placeholder="type task here..."
                className="form-control text-capitalize"
                value={item}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={item ? false : true}
            className={
              editItem
                ? "btn btn-success btn-block text-capitalize"
                : "btn btn-primary btn-block text-capitalize"
            }
          >
            {editItem ? "edit task" : "submit task"}
          </button>
        </form>
      </div>
    );
  }
}

export default TaskInput;
