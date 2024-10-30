import { useState, useEffect } from 'react'

import './App.css'
import Input from './components/Input'
import Tasks from './components/Tasks'
import Filter from './components/Filter'
function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasksSaved");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  
  const [filter, setFilter] = useState('all')


  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasksSaved"))
    if (storedTasks) {
      setTasks(storedTasks)
    }
  }, [])

  useEffect(() => {
    console.log("Updating tasks in localStorage:", tasks);
    localStorage.setItem("tasksSaved", JSON.stringify(tasks));
  }, [tasks]);
  

  const addTask = (taskText) => {
    const newTask = { text: taskText, completed: false }
    setTasks([...tasks, newTask])
  }

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    )
    setTasks(updatedTasks)
  }
  const delTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed
    if (filter === 'notCompleted') return !task.completed
    return true
  })

  return (
    <>
    {/*Wczytywanie komponentów*/}
      <h1>Lista zadań</h1>
      {/*Komponent TaskInput*/}
      <Input addTask={addTask} />
      {/*Komponent Filter*/}
      <Filter setFilter={setFilter} />
      {/*Komponent TaskList*/}
      <Tasks
        tasks={filteredTasks}
        toggleTask={toggleTask}
        delTask={delTask}
      />
    </>
  )
}

export default App