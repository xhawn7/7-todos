import { makeAutoObservable } from "mobx";
import { addToDo, defaultUrl, removeItem, toggle, updateItem } from "../utils";

class ToDos {
  toDoList = [];
  newValue = '';
  constructor() {
    makeAutoObservable(this)
  }
  setNewVal(val) {
    this.newValue = val
  }
  add() {
    this.toDoList = addToDo(this.toDoList, this.newValue)
    this.newValue = ''
  }
  remove(id) {
    this.toDoList = removeItem(this.toDoList, id)
  }
  update(id, val) {
    this.toDoList = updateItem(this.toDoList, id, val)
  }
  toggle(id) {
    this.toDoList = toggle(this.toDoList, id)
  }
  // 如果是异步数据
  load(url = defaultUrl) {
    fetch(url).then((rep) => rep.json()).then(res => {
      this.toDoList = res
    })
  }
}

export const store = new ToDos()
