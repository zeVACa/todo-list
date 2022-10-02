import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter';

class Footer extends Component {
  static defaultProps = {
    setActiveFilterCategory: () => {},
    activeFilterCategory: 'all',
    deleteCompletedTasks: () => {},
    uncompletedTasksCount: 0,
  };

  static propTypes = {
    setActiveFilterCategory: PropTypes.func,
    activeFilterCategory: PropTypes.string,
    deleteCompletedTasks: PropTypes.func,
    uncompletedTasksCount: PropTypes.number,
  };

  render() {
    const {
      setActiveFilterCategory,
      activeFilterCategory,
      deleteCompletedTasks,
      uncompletedTasksCount,
    } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">{uncompletedTasksCount} items left</span>
        <TasksFilter
          setActiveFilterCategory={setActiveFilterCategory}
          activeFilterCategory={activeFilterCategory}
        />
        <button className="clear-completed" onClick={deleteCompletedTasks}>
          Clear completed
        </button>
      </footer>
    );
  }
}

export default Footer;
