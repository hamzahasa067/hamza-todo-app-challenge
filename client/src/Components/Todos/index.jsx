import React, { useState } from "react"
import TodosContextProvider from "../../contexts/todosContext"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import TodosFooter from "./TodosFooter"
export default function Index() {
  return (
    <TodosContextProvider>
      <div className="Todos container">
        <AddTodo />
        <ul className="todos-list">
          <TodoList />
          <TodosFooter />
        </ul>
      </div>
    </TodosContextProvider>
  )
}
