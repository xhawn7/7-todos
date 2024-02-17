import { useZustandStore } from '../../Store/zustand.js'
import ToDoMain from '../ui/ToDoMain.js'

const ZustandToDo = () => {
  const { toDoList, newValue, setNewVal, add, load, update, remove, toggle } = useZustandStore()
  const addProps = {
    value: newValue,
    onValChange: (e) => setNewVal(e.target.value),
    add: () => add(),
    loadToDo: () => load(),
    toDoList: toDoList,
  }
  const listProps = {
    toDoList: toDoList,
    update: (e, id) => update(id, e.target.value),
    remove: (id) => remove(id),
    toggle: (id) => toggle(id)
  }

  const todoPros = {
    title: 'ZustandToDo',
    addProps,
    listProps
  }

  return (
    <ToDoMain {...todoPros} />
  )
}

export default ZustandToDo
