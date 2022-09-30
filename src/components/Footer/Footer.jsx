import React, { Component } from 'react';
import TasksFilter from '../TasksFilter';

class Footer extends Component {
  render() {
    const { setActiveFilterCategory, activeFilterCategory } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">1 items left</span>
        <TasksFilter
          setActiveFilterCategory={setActiveFilterCategory}
          activeFilterCategory={activeFilterCategory}
        />
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}

export default Footer;
