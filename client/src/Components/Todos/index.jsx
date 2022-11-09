import React from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import TodosFooter from "./TodosFooter"
export default function index() {
  return (
    <div className="Todos container">
      <AddTodo />
      <ul className="todos-list">
        <TodoList />
        <TodosFooter />
      </ul>
    </div>
  )
}
