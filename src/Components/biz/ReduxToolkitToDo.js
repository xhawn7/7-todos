import { Provider, useDispatch, useSelector } from "react-redux";
import { store, actions } from 'src/Store/reduxToolkit.js'
import ToDoMain from '../ui/ToDoMain.js';

const ToDo = () => {
  const { setNewVal, add, remove, toggle, update, load } = actions
  const dispatch = useDispatch();
  const addProps = {
    value: useSelector((state) => state.newValue),
    onValChange: (e) => dispatch(setNewVal(e.target.value)),
    add: () => dispatch(add()),
    loadToDo: () => dispatch(load()),
    toDoList: useSelector((state) => state.toDoList),
  }
  const listProps = {
    toDoList: useSelector((state) => state.toDoList),
    remove: (id) => dispatch(remove(id)),
    toggle: (id) => dispatch(toggle(id)),
    update: (e, id) => dispatch(update(id, e.target.value)),
  }

  const todoPros = {
    title: 'ReduxToolkitToDo',
    addProps,
    listProps
  }

  return (
    <ToDoMain {...todoPros} />
  )
}

// 必须要再包一层
const ReduxToolkitToDo = () => (
  <Provider store={store}>
    <ToDo />
  </Provider>
)

export default ReduxToolkitToDo