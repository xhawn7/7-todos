import { Provider, useCtx, Ctx } from 'src/Store/ctx'
import { addToDo, removeItem, toggle as toggleItem, updateItem, fetchToDos, defaultUrl } from 'src/utils';
import ToDoMain from '../ui/ToDoMain';

const ToDo = () => {
  // 方式1：把ctx的方法放在引用的组件来写
  // const [{ toDoList, newValue }, setState] = useCtx()
  // const addProps = {
  //   value: newValue,
  //   onValChange: (e) => setState((prev) => ({
  //     ...prev,
  //     newValue: e.target.value
  //   })),
  //   add: () => {
  //     setState((prev) => ({
  //       ...prev,
  //       toDoList: addToDo(toDoList, newValue),
  //       newValue: ''
  //     })
  //     )
  //   }
  // }

  // const listProps = {
  //   toDoList: toDoList,
  //   remove: (id) => setState((prev) => ({
  //     ...prev,
  //     toDoList: removeItem(toDoList, id)
  //   })),
  //   update: (e, id) => setState((prev) => ({
  //     ...prev,
  //     toDoList: updateItem(toDoList, id, e.target.value)
  //   })),
  //   toggle: (id) => setState((prev) => ({
  //     ...prev,
  //     toDoList: toggleItem(toDoList, id)
  //   }))
  // }

  // 方式2：把ctx的方法放在store里面写
  const { toDoList, newValue, setNewVal, add, remove, update, toggle, loadToDo } = useCtx()
  const addProps = {
    value: newValue,
    onValChange: (e) => setNewVal(e.target.value),
    add: () => add(),
    loadToDo: () => loadToDo(),
    toDoList: toDoList,
  }

  const listProps = {
    toDoList: toDoList,
    remove: (id) => remove(id),
    update: (e, id) => update(e.target.value, id),
    toggle: (id) => toggle(id)
  }

  const todoPros = {
    title: 'UseContextToDo',
    addProps,
    listProps,
  }

  return (
    <ToDoMain {...todoPros} />
  )
}

// 方式3，用consumer的形式
// return (
//   <Ctx.Consumer>
//     {
//       value => {
//         const { toDoList, newValue, setNewVal, add, remove, update, toggle, loadToDo } = value
//         const addProps = {
//           value: newValue,
//           onValChange: (e) => setNewVal(e.target.value),
//           add: () => add(),
//           loadToDo: () => loadToDo(),
//           toDoList: toDoList,
//         }

//         const listProps = {
//           toDoList: toDoList,
//           remove: (id) => remove(id),
//           update: (e, id) => update(e.target.value, id),
//           toggle: (id) => toggle(id)
//         }

//         const todoPros = {
//           title: 'UseContextToDo',
//           addProps,
//           listProps,
//         }
//         return <ToDoMain {...todoPros} />
//       }
//     }
//   </Ctx.Consumer>
// )
// }

const CtxToDo = () => (
  <Provider>
    <ToDo />
  </Provider>
)

export default CtxToDo