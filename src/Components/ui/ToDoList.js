import React, { useState } from 'react'
import ToDoItem from './ToDoItem'
const TodoList = ({ toDoList, ...props }) => {
  console.log(toDoList)
  return (
    <>
      {
        toDoList?.length >= 1 && <h3>内容</h3>
      }
      {
        toDoList?.map(item => (<ToDoItem {...props} item={item} />))
      }
    </>
  )
}

export default TodoList