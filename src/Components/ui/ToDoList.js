import ToDoItem from './ToDoItem'
const TodoList = ({ toDoList, ...props }) => {
  return (
    <>
      {
        toDoList?.map(item => (<ToDoItem {...props} item={item} key={item.id} />))
      }
    </>
  )
}

export default TodoList