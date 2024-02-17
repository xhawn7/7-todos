import { create } from "zustand";
import { addToDo, defaultUrl, removeItem, toggle, updateItem } from "../utils";
export const useZustandStore = create(
  set => ({
    toDoList: [],
    newValue: '',
    setNewVal: (newValue) => set((state) => ({
      ...state,
      newValue
    })),
    add: () => set((state) => ({
      ...state,
      toDoList: addToDo(state.toDoList, state.newValue),
      newValue: ''
    })),
    remove: (id) =>
      set((state) => ({
        ...state,
        toDoList: removeItem(state.toDoList, id)
      })),
    toggle: (id) => set((state) => ({
      ...state,
      toDoList: toggle(state.toDoList, id)
    })),
    update: (id, val) => set((state) => ({
      ...state,
      toDoList: updateItem(state.toDoList, id, val)
    })),
    // 如果是异步数据
    load: (url = defaultUrl) => fetch(url).then(rep => rep.json()).then(toDoList => set((state) => ({
      ...state,
      toDoList
    }))),
  })
)
