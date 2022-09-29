import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.completed = props.completed;
    this.editing = props.editing;
    this.deleteTask = props.deleteTask;
    this.id = props.id;
  }

  render() {
    return (
      <li
        className={`${this.completed ? 'completed' : ''} ${
          this.editing ? 'editing' : ''
        }`}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            defaultChecked={this.completed}
          />
          <label>
            <span className="description">{this.text}</span>
            <span className="created">created 17 seconds ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button
            className="icon icon-destroy"
            onClick={() => this.deleteTask(this.id)}
          ></button>
        </div>
        {this.editing ? (
          <input type="text" className="edit" value={this.text} />
        ) : null}
      </li>
    );
  }
}

export default Task;
