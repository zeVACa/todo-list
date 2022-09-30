import React, { Component } from 'react';

class TasksFilter extends Component {
  render() {
    const { setActiveFilterCategory, activeFilterCategory } = this.props;

    return (
      <ul className="filters">
        <li>
          <button
            className={activeFilterCategory === 'all' ? 'selected' : ''}
            onClick={() => setActiveFilterCategory('all')}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveFilterCategory('active')}
            className={activeFilterCategory === 'active' ? 'selected' : ''}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveFilterCategory('completed')}
            className={activeFilterCategory === 'completed' ? 'selected' : ''}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}

export default TasksFilter;
