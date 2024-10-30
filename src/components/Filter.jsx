import React from 'react'
const Filter = ({ setFilter }) => {
  return (
    <select onChange={(e) => setFilter(e.target.value)}>
      <option value="all">Wszystkie</option>
      <option value="completed">Wykonane</option>
      <option value="notCompleted">Niewykonane</option>
    </select>
  )
}

export default Filter