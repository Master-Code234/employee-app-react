import React from 'react'



export default function EmployeeListItem( {className, name, title}) {
  return (
    <div className={className}>
        <h2>{name}</h2>
        <p>{title}</p>

    </div>
  )
}
