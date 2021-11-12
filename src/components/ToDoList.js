import React from 'react';
import ToDoListItem from './ToDoListItem';

function ToDoList(props) {

  return (
    <>
    <ul>
      { props.items.map(entry => {
        return (
            <ToDoListItem key={ entry.id } line={entry} todoChange={props.todoChange}/>
        );
      })}
    </ul>
    </>
  )
}

export default ToDoList;