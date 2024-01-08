export const addToDo = (todos, text) => {
  return [
    ...todos,
    {
      id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
      text,
      done: false
    }
  ]
}

export const removeItem = (todos, id) => todos.filter((item) => item.id !== id)

export const toggle = (todos, id) => todos.map(item => {
  if (item.id === id) {
    item.done = !item.done
  }
  return item
})

export const updateItem = (todos, id, val) => todos?.map(item => {
  return {
    ...item,
    text: item.id === id ? val : item.text
  }
})
