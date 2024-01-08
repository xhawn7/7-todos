import React from 'react'

const ToDoItem = ({ item, update, remove, toggle }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
      <div>
        <input type="checkbox" checked={item?.done} onChange={() => toggle(item.id)} />
        <label
          style={{ textDecoration: item.done ? 'line-through' : null }}
        >
          <input
            type="text"
            value={item?.text}
            style={{ textDecoration: item.done ? 'line-through' : null }}
            onChange={(e) => update(e, item.id)}
          />
        </label>
      </div>
      <button onClick={() => remove(item.id)}>删除</button>
    </div>

  )
}

export default ToDoItem