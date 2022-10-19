import PropTypes from 'prop-types';
import classNames from 'classnames';

const TasksFilter = ({ setActiveFilterCategory, activeFilterCategory }) => {
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
        <button onClick={() => setActiveFilterCategory('completed')} className={btnCompletedClass}>
          Completed
        </button>
      </li>
    </ul>
  );
};

TasksFilter.defaultProps = {
  setActiveFilterCategory: () => {},
  activeFilterCategory: 'all',
};

TasksFilter.propTypes = {
  setActiveFilterCategory: PropTypes.func,
  activeFilterCategory: PropTypes.string,
};

export default TasksFilter;
