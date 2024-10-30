import React from 'react'
import Items from './Items'
const TasksList = ({ tasks, toggleTask, delTask }) => {
  return (
    <div id="listaZadan">
      {tasks.map((task, index) => (
        <Items
          key={index}
          task={task}
          index={index}
          toggleTask={toggleTask}
          delTask={delTask}/>
      ))}
    </div>
  )
}

export default TasksList