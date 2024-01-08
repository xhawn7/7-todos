import React from 'react'
import ToDoList from 'src/Components/ui/ToDoList.js'
import ToDoAdd from 'src/Components/ui/ToDoAdd.js'
import useZustandStore from '../../Store/zustand.js'

const ZustandToDo = () => {
  // 行为
  const store = useZustandStore()
  const addProps = {
    value: store.newValue,
    onValChange: (e) => store.setNewVal(e.target.value),
    add: () => store.add()
  }
  const listProps = {
    toDoList: store.toDoList,
    update: (e, id) => store.update(id, e.target.value),
    remove: (id) => store.remove(id),
    toggle: (id) => store.toggle(id)
  }
  return (
    <div>
      <h2>ZustandToDo</h2>
      <ToDoAdd {...addProps} />
      <ToDoList {...listProps} />
    </div>
  )
}

export default ZustandToDo