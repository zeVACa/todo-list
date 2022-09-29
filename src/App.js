import React, { Component } from 'react';
import Footer from './components/Footer';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          id: 1,
          completed: true,
          editing: false,
          text: 'Completed task',
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

  render() {
    return (
      <div className="App">
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <NewTaskForm />
          </header>
          <section className="main">
            <TaskList
              tasks={this.state.tasks}
              deleteTask={this.deleteTask}
              completeTask={this.completeTask}
            />
            <Footer />
          </section>
        </section>
      </div>
    );
  }
}

export default App;
