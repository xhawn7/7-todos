import React from 'react'
const ToDoAdd = ({ value, onValChange, add }) => {
  return (
    <>
      <input type="text" onChange={onValChange} value={value} />
      <button onClick={add}>add</button>
    </>
  )
}

export default ToDoAdd