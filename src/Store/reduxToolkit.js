import { configureStore, createReducer, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { addToDo, defaultUrl, removeItem, toggle as toggleItem, updateItem } from "src/utils";

export const actions = {
  setNewVal: createAction('SET_NEWTODO'),
  add: createAction('ADD_TODO'),
  remove: createAction('REMOVE_TODO'),
  // 如果payload是个对象
  update: createAction('UPDATE', (id, val) => ({ payload: { id, val } })),
  toggle: createAction('TOGGLE'),
  // 如果是异步数据
  load: createAsyncThunk('load', (url = defaultUrl) => fetch(url).then(rep => rep.json()).then(res => res))
  // 也可以用异步函数
  // load : createAsyncThunk('load', async (url = defaultUrl) => {
  //   const rep = await fetch(url)
  //   return await rep.json()
  // })
}

const initState = {
  toDoList: [],
  newValue: '',
}

const { setNewVal, add, remove, toggle, update, load } = actions
const reducer = createReducer(initState, (builder) => {
  builder
    .addCase(setNewVal, (state, action) => {
      state.newValue = action.payload
    })
    .addCase(add, (state) => {
      state.toDoList = addToDo(state.toDoList, state.newValue)
      state.newValue = ''
    })
    .addCase(remove, (state, action) => {
      state.toDoList = removeItem(state.toDoList, action.payload)
    })
    .addCase(toggle, (state, action) => {
      state.toDoList = toggleItem(state.toDoList, action.payload)
    })
    .addCase(update, (state, action) => {
      state.toDoList = updateItem(state.toDoList, action.payload.id, action.payload.val)
    })
    .addCase(load.fulfilled, (state, action) => {
      state.toDoList = action.payload
    });
})

export const store = configureStore({
  reducer,
  devTools: true
})
