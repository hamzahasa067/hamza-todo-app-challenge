import React from "react"
import CheckIcon from "../../images/icon-check.svg"
export default function TodoItem({ isDone }) {
  return (
    <li className={"todo-item " + (isDone ? "done" : "")}>
      <div className="todo-checker">
        <img className="checkmark" src={CheckIcon} width={16} height={16} />
      </div>
      <div className="todo-text"> Do some important work tomotrow </div>
    </li>
  )
}
