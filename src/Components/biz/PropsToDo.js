import ToDoMain from '../ui/ToDoMain'
import useStore from 'src/Store/props'

const PropsToDo = () => {
  const { newValue, toDoList, setNewVal, add, remove, update, toggle, loadToDo } = useStore()
  const addProps = {
    value: newValue,
    onValChange: (e) => setNewVal(e.target.value),
    add: () => add(),
    loadToDo: () => loadToDo(),
    toDoList: toDoList,
  }

  const listProps = {
    toDoList: toDoList,
    remove: (id) => remove(id),
    update: (e, id) => update(e.target.value, id),
    toggle: (id) => toggle(id)
  }

  const todoPros = {
    title: 'PropsToDo',
    addProps,
    listProps,
  }

  return (
    < ToDoMain {...todoPros} />
  )

}
export default PropsToDo