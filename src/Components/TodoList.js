import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';
import '../CSS/Todo.css';

function TodoList({text}) {
  return (
    <div className='todo_list'>
    <List>
      <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
        <ListItemText primary="Task" secondary={text}/>
      </ListItem>
    </List>
    </div>
    
  )
}

export default TodoList 

