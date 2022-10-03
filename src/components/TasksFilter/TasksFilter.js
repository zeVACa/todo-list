import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class TasksFilter extends Component {
  static defaultProps = {
    setActiveFilterCategory: () => {},
    activeFilterCategory: 'all',
  };

  static propTypes = {
    setActiveFilterCategory: PropTypes.func,
    activeFilterCategory: PropTypes.string,
  };

  render() {
    const { setActiveFilterCategory, activeFilterCategory } = this.props;

    const btnAllClass = classNames({
      selected: activeFilterCategory === 'all',
    });

    const btnActiveClass = classNames({
      selected: activeFilterCategory === 'active',
    });

    const btnCompletedClass = classNames({
      selected: activeFilterCategory === 'completed',
    });

    return (
      <ul className="filters">
        <li>
          <button className={btnAllClass} onClick={() => setActiveFilterCategory('all')}>
            All
          </button>
        </li>
        <li>
          <button onClick={() => setActiveFilterCategory('active')} className={btnActiveClass}>
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveFilterCategory('completed')}
            className={btnCompletedClass}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}

export default TasksFilter;
