import { Provider, useDispatch, useSelector } from "react-redux";
import { store, actions } from '../../Store/reduxThunk.js'
import ToDoMain from '../ui/ToDoMain.js';

const ToDo = () => {
  const dispatch = useDispatch();
  const { setNewVal, add, remove, toggle_todo, update_todo, get_load } = actions
  const addProps = {
    value: useSelector((state) => state.newValue),
    onValChange: (e) => dispatch(setNewVal(e.target.value)),
    add: () => dispatch(add()),
    loadToDo: () => dispatch(get_load()),
    toDoList: useSelector((state) => state.toDoList),
  }
  const listProps = {
    toDoList: useSelector((state) => state.toDoList),
    remove: (id) => dispatch(remove(id)),
    toggle: (id) => dispatch(toggle_todo(id)),
    update: (e, id) => dispatch(update_todo(id, e.target.value)),
  }

  const todoPros = {
    title: 'ReduxThunkToDo',
    addProps,
    listProps
  }

  return (
    <ToDoMain {...todoPros} />
  )
}

// 必须要再包一层
const ReduxThunkToDo = () => (
  <Provider store={store}>
    <ToDo />
  </Provider>
)

export default ReduxThunkToDo