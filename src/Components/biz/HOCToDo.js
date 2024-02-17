import ToDoMain from '../ui/ToDoMain'
import HOC from 'src/Store/hoc'

const ToDo = ({ newValue, toDoList, setNewVal, add, remove, update, toggle, loadToDo }) => {
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
    title: 'HOCToDo',
    addProps,
    listProps,
  }

  return (
    < ToDoMain {...todoPros} />
  )

}

export default HOC(ToDo);
