import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';
import './Todo.css';

function TodoList({text}) {
  return (
    <>
    <List>
      <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
        <ListItemText primary="Task" secondary={text}/>
      </ListItem>
    </List>
    </>
    
  )
}

export default TodoList 

