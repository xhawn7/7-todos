import { observer } from "mobx-react";
import { store } from 'src/Store/mobx.js'
import ToDoMain from '../ui/ToDoMain';
const MobxToDo = () => {
  const addProps = {
    value: store.newValue,
    onValChange: (e) => store.setNewVal(e.target.value),
    add: () => store.add(),
    loadToDo: () => store.load(),
    toDoList: store.toDoList,
  }

  const listProps = {
    toDoList: store.toDoList,
    remove: (id) => store.remove(id),
    update: (e, id) => store.update(id, e.target.value),
    toggle: (id) => store.toggle(id)
  }

  const todoPros = {
    title: 'MobxToDo',
    addProps,
    listProps,
  }

  return (
    <ToDoMain {...todoPros} />
  )
}

export default observer(MobxToDo)