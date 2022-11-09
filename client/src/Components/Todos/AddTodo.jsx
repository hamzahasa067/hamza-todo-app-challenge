import React, { useState } from "react"
import Input from "../Input"

export default function AddTodo({}) {
  const [todoValue, setTodoValue] = useState("")
  const handleFromSubmit = (e) => {
    e.preventDefault()
    console.log(todoValue)
  }
  const handleChange = (e) => {
    setTodoValue(e.target.value)
  }
  return (
    <form onSubmit={handleFromSubmit}>
      <Input
        placeholder={"What do have next to do?"}
        value={todoValue}
        handleChange={handleChange}
      />
    </form>
  )
}
