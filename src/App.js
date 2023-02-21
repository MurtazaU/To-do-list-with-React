import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import './Components/TodoList';
import './App.css';
import TodoList from './Components/TodoList';

function App() {
  // Setting Up State
  const [tasks, setTasks] = useState(['Task 1', 'Task 2']);
  const [input, setInput] = useState('');


  // Function For Adding Task
  const addTask = (event) =>{
    // Preventing the form from refreshing the page as it would delete the state
    event.preventDefault();
    // Adding new tasks into the array using the "Spread Operator"
      setTasks([...tasks, input]);
    // Setting Input back to none
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* Form */}
      <form>
        {/* Input */}
      <TextField type="text" value={input} onChange={event => setInput(event.target.value)} id="standard-basic" label="Task" />
      {/* Button */}
      <Button disabled={input.length == 0 } onClick={addTask}  type="submit" variant="contained" color="primary">
      Add Task
      </Button>
      </form>
      
      <ul>
        {/* Mapping */}
        {
          tasks.map(task =>(
            <TodoList text={task}/>
            ))
        }
      </ul>
    </div>
  );
}

export default App;
