import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { addToDo, defaultUrl, removeItem, toggle, updateItem } from "../utils";

// actions

// 如果是异步数据
const load_todo = (text) => ({
  type: 'LOAD',
  payload: text
})

export const actions = {
  setNewVal: (text) => ({
    type: 'SET_NEWTODO',
    payload: text
  }),
  add: () => ({
    type: 'ADD_TODO'
  }),
  remove: (id) => ({
    type: 'REMOVE_TODO',
    payload: id
  }),
  toggle_todo: (id) => ({
    type: 'TOGGLE',
    payload: id
  }),
  update_todo: (id, val) => ({
    type: 'UPDATE',
    payload: { id, val }
  }),
  get_load: (url = defaultUrl) => (dispatch) =>
    fetch(url).then(rep => rep.json()).then(res => dispatch(load_todo(res)))
  // 也可以用异步函数的方式
  // get_load: (url = defaultUrl) => async (dispatch) => {
  //   const rep = await fetch(url);
  //   const res = await rep.json()
  //   dispatch(load_todo(res))
  // }
}

// reducer
const initState = {
  toDoList: [],
  newValue: '',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_NEWTODO':
      return {
        ...state,
        newValue: action.payload
      }
    case 'ADD_TODO':
      return {
        ...state,
        toDoList: addToDo(state.toDoList, state.newValue),
        newValue: ''
      }
    case 'REMOVE_TODO':
      return {
        ...state,
        toDoList: removeItem(state.toDoList, action.payload)
      }
    case 'TOGGLE':
      return {
        ...state,
        toDoList: toggle(state.toDoList, action.payload)
      }
    case 'UPDATE':
      return {
        ...state,
        toDoList: updateItem(state.toDoList, action.payload.id, action.payload.val)
      }
    case 'LOAD':
      return {
        ...state,
        toDoList: action.payload
      }
    default:
      return state
  }
}

export const store = createStore(reducer, applyMiddleware(thunk))
