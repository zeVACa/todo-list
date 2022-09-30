import React, { Component } from 'react';
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
          id: 1,
          completed: false,
          editing: false,
          text: 'в инпуте не стирается текст',
          active: false,
        },
        {
          id: 2,
          completed: false,
          editing: false,
          text: 'Editing task',
          active: false,
        },
        {
          id: 3,
          completed: false,
          editing: false,
          text: 'Active task',
          active: true,
        },
      ],
    };
  }

  deleteTask = (id) => {
    this.setState((state) => {
      return { tasks: state.tasks.filter((item) => item.id !== id) };
    });
  };

  completeTask = (id) => {
    this.setState((state) => {
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === id) {
            return { ...task, completed: !task.completed };
          }

          return task;
        }),
      };
    });
  };

  onInputChangeHandle = (e) => {
    if (e.key === 'Enter') {
      if (this.state.newTaskInputValue === '') {
        return;
      }

      this.setState((state) => {
        return {
          newTaskInputValue: '',
          tasks: [
            ...state.tasks,
            {
              id: state.tasks[state.tasks.length - 1]?.id + 1 || 1,
              completed: false,
              editing: false,
              text: state.newTaskInputValue,
              active: true,
            },
          ],
        };
      });

      return;
    }

    this.setState((state) => ({
      newTaskInputValue: state.newTaskInputValue + e.key,
    }));
  };

  setActiveFilterCategory = (categoryName) => {
    // console.log(this.state.activeFilterCategory);
    this.setState({
      activeFilterCategory: categoryName,
    });
  };

  render() {
    return (
      <div className="App">
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <NewTaskForm
              newTaskInputValue={this.state.newTaskInputValue}
              onInputChangeHandle={this.onInputChangeHandle}
            />
          </header>
          <section className="main">
            <TaskList
              tasks={this.state.tasks}
              deleteTask={this.deleteTask}
              completeTask={this.completeTask}
              activeFilterCategory={this.state.activeFilterCategory}
            />
            <Footer
              setActiveFilterCategory={this.setActiveFilterCategory}
              activeFilterCategory={this.state.activeFilterCategory}
            />
          </section>
        </section>
      </div>
    );
  }
}

export default App;
