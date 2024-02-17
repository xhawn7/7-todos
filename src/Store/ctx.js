import { useState, createContext, useContext } from 'react'
import { addToDo, removeItem, toggle as toggleItem, updateItem, defaultUrl } from 'src/utils';

export const Ctx = createContext(null)
export const useCtx = () => useContext(Ctx)
const initState = {
  toDoList: [],
  newValue: '',
}

// 方式1：把ctx的方法放在引用的组件来写
// const useToDo = (val) => useState(val)
// export const Provider = ({ children }) => (
//   <Ctx.Provider value={useToDo(initState)} >
//     {children}
//   </Ctx.Provider>
// )

// 方式2：把ctx的方法放在store里面写
export const Provider = ({ children }) => {
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
  return (
    <Ctx.Provider value={value} >
      {children}
    </Ctx.Provider>
  )
}