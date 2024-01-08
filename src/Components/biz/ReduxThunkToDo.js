import React from 'react'
import { store } from '../../Store/reduxThunk.js'
import ToDoAdd from '../ui/ToDoAdd.js'
import { Provider, useDispatch, useSelector } from "react-redux";
import { setNewVal, add } from '../../Store/reduxThunk.js'
import TodoList from '../ui/ToDoList.js';

const ToDo = () => {
  const dispatch = useDispatch();
  const addProps = {
    value: useSelector((state) => state.newValue),
    onValChange: (e) => dispatch(setNewVal(e.target.value)),
    add: () => dispatch(add())
  }
  const listProps = {
    toDoList: useSelector((state) => state.toDoList),
    // update: (e, id) => store.update(id, e.target.value),
    // remove: (id) => store.remove(id),
    // toggle: (id) => store.toggle(id)
  }
  return (
    <div>
      <h2>ReduxThunkToDo</h2>
      <ToDoAdd {...addProps} />
      <TodoList {...listProps} />
    </div>
  )
}

// 必须要再包一层
const ReduxThunkToDo = () => (
  <Provider store={store}>
    <ToDo />
  </Provider>
)

export default ReduxThunkToDo