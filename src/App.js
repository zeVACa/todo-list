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

  onInputChangeHandle = (e) => {
    this.setState({
      newTaskInputValue: e.target.value,
    });
  };

  onEnterKeyPress = (e) => {
    const { newTaskInputValue } = this.state;

    if (e.key === 'Enter') {
      if (newTaskInputValue === '') {
        return;
      }

      this.setState((state) => ({
        newTaskInputValue: '',
        tasks: [
          ...state.tasks,
          {
            id: uuid(),
            completed: false,
            editing: false,
            text: state.newTaskInputValue,
            active: true,
            createdDate: new Date(),
          },
        ],
      }));
    }
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

  render() {
    const { newTaskInputValue, tasks, activeFilterCategory } = this.state;

    return (
      <div className="App">
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <NewTaskForm
              newTaskInputValue={newTaskInputValue}
              onInputChangeHandle={this.onInputChangeHandle}
              onEnterKeyPress={this.onEnterKeyPress}
            />
          </header>
          <section className="main">
            <TaskList
              tasks={tasks}
              deleteTask={this.deleteTask}
              completeTask={this.completeTask}
              activeFilterCategory={activeFilterCategory}
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
