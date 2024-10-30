import React from 'react'

const Input = ({ addTask }) => {
  const handleSave = () => {
    const input = document.getElementById("input").value
    if (input.trim()) {
      addTask(input)
      document.getElementById("input").value = "" 
    }
  }
  return (
    <div>
      <input type="text" placeholder="Wpisz nazwę" id="input" />
      <button onClick={handleSave}>Dodaj</button>
    </div>
  )
}
export default Input