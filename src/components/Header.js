import React from 'react'

export default function Header({ className,title}) {
  return (
    <header className={className}>
      <h1>{title}</h1>
    </header>
  )
}
