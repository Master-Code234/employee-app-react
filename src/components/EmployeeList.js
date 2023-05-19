import React from 'react'
import EmployeeListItem from './EmployeeListItem'

export default function EmployeeList() {
  return (
    <div className='employee-List'>
        <EmployeeListItem className="employee-list-item" name="John" title="vip worker"/>
        <EmployeeListItem className="employee-list-item" name="John" title="barn manager"/>
        <EmployeeListItem className="employee-list-item" name="Bob" title="Master Builder"/>
       
        <EmployeeListItem className="employee-list-item" name="John" title="wood inspector"/>
        <EmployeeListItem className="employee-list-item" name="John" title="tractor expert"/>
        <EmployeeListItem className="employee-list-item" name="John" title="barn worker"/>


    </div>
  )
}
