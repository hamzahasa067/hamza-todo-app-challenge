import React, { useContext } from "react"
import { TodosContext, UpdateTodosContext } from "../../contexts/todosContext"
export default function TodosFooter({ setFilter }) {
  const todos = useContext(TodosContext)
  const updateTodos = useContext(UpdateTodosContext)
  return (
    <div className="todo-item todos-footer">
      <div className="count">
        {todos.filter((item) => !item.isDone).length} Items Left
      </div>
      <div className="filters-container">
        <div onClick={(_) => setFilter({ function: (todos) => todos })}>
          All
        </div>
        <div
          onClick={(_) =>
            setFilter({
              function: (todos) => todos.filter((item) => item.isDone),
            })
          }
        >
          Done
        </div>
        <div
          onClick={(_) =>
            setFilter({
              function: (todos) => todos.filter((item) => !item.isDone),
            })
          }
        >
          Active
        </div>
      </div>
      <div
        className="clear"
        onClick={(_) => updateTodos([...todos.filter((item) => !item.isDone)])}
      >
        Clear Completed
      </div>
    </div>
  )
}
