import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { addToDo, removeItem, toggle, updateItem } from "../utils";

// actions
export const setNewVal = (text) => ({
  type: 'SET_NEWTODO',
  payload: text
})

export const add = () => ({
  type: 'ADD_TODO'
})

// store

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
    default:
      return state
  }
}

export const store = createStore(reducer, applyMiddleware(thunk))