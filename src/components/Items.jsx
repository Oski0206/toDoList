import React from 'react'

const Items = ({ task, index, toggleTask, delTask }) => {
  return (
    <div className={task.completed ? "strikeThrough" : ""}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(index)}/>
      {task.text}
      <button onClick={() => delTask(index)}>Usuń</button>
    </div>
  )
}
export default Items