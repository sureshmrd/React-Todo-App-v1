import React from 'react'
import './styles/TodoItem.css';

function TodoItem({index,item,handleDeleteTodo,handleEditTodo}) {
  return (
        <li key={index} className='todoItem'>
            <span className='todo-text'>{item}</span>
            <div className='actionsContainer'>
            <button className='delete-button' onClick={()=>{handleDeleteTodo(index)}}
            >Delete</button>
            <button className='edit-button'onClick={()=>{handleEditTodo(index)}}>Edit</button>
            </div>
        </li>
  )
}

export default TodoItem;
