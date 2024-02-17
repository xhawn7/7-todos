import { useState } from "react"
import { addToDo, defaultUrl, removeItem, toggle as toggleItem, updateItem } from 'src/utils';

const initState = {
  toDoList: [],
  newValue: '',
}

const useStore = () => {
  const [{ toDoList, newValue }, setState] = useState(initState)
  const value = {
    toDoList,
    newValue,
    setNewVal: (val) => setState((prev) => ({
      ...prev,
      newValue: val
    })),
    add: () => setState(prev => ({
      ...prev,
      toDoList: addToDo(toDoList, newValue),
      newValue: ''
    })),
    remove: (id) => setState((prev) => ({
      ...prev,
      toDoList: removeItem(toDoList, id)
    })),
    update: (val, id) => setState((prev) => ({
      ...prev,
      toDoList: updateItem(toDoList, id, val)
    })),
    toggle: (id) => setState((prev) => ({
      ...prev,
      toDoList: toggleItem(toDoList, id)
    })),
    loadToDo: (url = defaultUrl) => fetch(url).then((rep) => rep.json()).then(res => {
      setState((prev) => ({
        ...prev,
        toDoList: res
      }))
    })
  }
  return value
}

export default useStore