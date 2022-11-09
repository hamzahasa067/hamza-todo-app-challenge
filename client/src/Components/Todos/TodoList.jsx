import React from "react"
import TodoItem from "./TodoItem"
export default function TodoList() {
  return (
    <>
      <TodoItem isDone={true} />
      <TodoItem />
      <TodoItem isDone={true} />
      <TodoItem />
      <TodoItem />
      <TodoItem isDone={true} />
      <TodoItem />
      <TodoItem isDone={true} />
    </>
  )
}
