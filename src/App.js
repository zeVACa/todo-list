import Footer from './components/Footer';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList />
          <Footer />
        </section>
      </section>
    </div>
  );
}

export default App;
