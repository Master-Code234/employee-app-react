import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'

export default function Homepage() {
  return (

    <div className='homepage'>
        <Header className="homepage-header" title="Employee Directory"/>
        <SearchBar/>
        <EmployeeList/>
    </div>
  )
}
