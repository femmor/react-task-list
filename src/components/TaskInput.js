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
                <div className="input-group-text bg-secondary">
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
            className="btn btn-info btn-block text-capitalize"
            type="submit"
          >
            submit task
          </button>
        </form>
      </div>
    );
  }
}

export default TaskInput;
