import React from 'react';
import './App.css';
import TaskList from '../src/components/TaskList';
import TaskForm from '../src/components/TaskForm';
import Header from '../src/components/Header';
import TaskListContextProvider from '../src/components/context/TaskListContext';

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
