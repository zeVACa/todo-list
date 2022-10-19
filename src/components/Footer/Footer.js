import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter';

const Footer = ({
  setActiveFilterCategory,
  activeFilterCategory,
  deleteCompletedTasks,
  uncompletedTasksCount,
}) => {
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
};

Footer.defaultProps = {
  setActiveFilterCategory: () => {},
  activeFilterCategory: 'all',
  deleteCompletedTasks: () => {},
  uncompletedTasksCount: 0,
};

Footer.propTypes = {
  setActiveFilterCategory: PropTypes.func,
  activeFilterCategory: PropTypes.string,
  deleteCompletedTasks: PropTypes.func,
  uncompletedTasksCount: PropTypes.number,
};

export default Footer;
