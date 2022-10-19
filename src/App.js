/* eslint-disable */
import React, { Component, useState } from 'react';
import { v4 as uuid } from 'uuid';

import Footer from './components/Footer';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [activeFilterCategory, setActiveFilterCategory] = useState('all');
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      completed: false,
      editing: false,
      text: 'Completed task',
      active: false,
      createdDate: new Date(),
      timeInSeconds: 59,
    },
    {
      id: uuid(),
      completed: false,
      editing: false,
      text: 'Editing task',
      active: false,
      createdDate: new Date(),
      timeInSeconds: 60,
    },
    {
      id: uuid(),
      completed: false,
      editing: false,
      text: 'Active task',
      active: true,
      createdDate: new Date(),
      timeInSeconds: 61,
    },
  ]);

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((item) => item.id !== id));
  };

  const completeTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }

        return task;
      })
    );
  };

  const deleteCompletedTasks = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  const addNewTask = (inputValue, minutes, seconds) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: uuid(),
        completed: false,
        editing: false,
        text: inputValue,
        active: true,
        createdDate: new Date(),
        timeInSeconds: Number(minutes) * 60 + Number(seconds),
      },
    ]);
  };

  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm addNewTask={addNewTask} />
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
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
          <Footer
            setActiveFilterCategory={(categoryName) => setActiveFilterCategory(categoryName)}
            activeFilterCategory={activeFilterCategory}
            deleteCompletedTasks={deleteCompletedTasks}
            uncompletedTasksCount={tasks.filter((task) => !task.completed).length}
          />
        </section>
      </section>
    </div>
  );
};

export default App;
