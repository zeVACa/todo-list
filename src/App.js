import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

import Footer from './components/Footer';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTaskInputValue: '',
      activeFilterCategory: 'all',
      tasks: [
        {
          id: uuid(),
          completed: false,
          editing: false,
          text: 'Completed task',
          active: false,
          createdDate: new Date(),
        },
        {
          id: uuid(),
          completed: false,
          editing: false,
          text: 'Editing task',
          active: false,
          createdDate: new Date(),
        },
        {
          id: uuid(),
          completed: false,
          editing: false,
          text: 'Active task',
          active: true,
          createdDate: new Date(),
        },
      ],
    };
  }

  deleteTask = (id) => {
    this.setState((state) => ({
      tasks: state.tasks.filter((item) => item.id !== id),
    }));
  };

  completeTask = (id) => {
    this.setState((state) => ({
      tasks: state.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }

        return task;
      }),
    }));
  };

  deleteCompletedTasks = () => {
    this.setState((state) => ({
      tasks: state.tasks.filter((task) => !task.completed),
    }));
  };

  setActiveFilterCategory = (categoryName) => {
    this.setState({
      activeFilterCategory: categoryName,
    });
  };

  addNewTask = (inputValue) => {
    this.setState((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: uuid(),
          completed: false,
          editing: false,
          text: inputValue,
          active: true,
          createdDate: new Date(),
        },
      ],
    }));
  };

  render() {
    const { tasks, activeFilterCategory } = this.state;

    return (
      <div className="App">
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <NewTaskForm addNewTask={this.addNewTask} />
          </header>
          <section className="main">
            <TaskList
              tasks={tasks.filter((task) => {
                if (activeFilterCategory === 'all') {
                  return task;
                }

                if (activeFilterCategory === 'completed') {
                  return task.completed;
                }

                if (activeFilterCategory === 'active') {
                  return !task.completed;
                }

                return task;
              })}
              deleteTask={this.deleteTask}
              completeTask={this.completeTask}
            />
            <Footer
              setActiveFilterCategory={this.setActiveFilterCategory}
              activeFilterCategory={activeFilterCategory}
              deleteCompletedTasks={this.deleteCompletedTasks}
              uncompletedTasksCount={tasks.filter((task) => !task.completed).length}
            />
          </section>
        </section>
      </div>
    );
  }
}

export default App;
