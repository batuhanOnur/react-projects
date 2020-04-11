import React from 'react';
import './App.css';
import TaskList from '../src/components/TaskList';
import TaskListContextProvider from '../src/components/context/TaskListContext';

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
