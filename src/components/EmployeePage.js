import React from "react";
import Header from "./Header";
import EmployeeListItem from "./EmployeeListItem";

export default function EmployeePage() {
  return (
    <div className="employee-page">
      <Header className="employee-header" title="Employee" />

      <div className="employee-pic">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Bob_the_builder.jpg/220px-Bob_the_builder.jpg" alt="bob the builder"></img>

        <div className="employee-info">
          <h2 className="employee-info-name">Bob The builder</h2>
          <p>Master Builder</p>
        </div>


        
      </div>

      <div className="contact-info-container">
          <EmployeeListItem className="contact-info-item" title="256-678-888" name="Call Office"/>
          <EmployeeListItem className="contact-info-item" title="256-678-888" name="Call Mobile"/>
          <EmployeeListItem className="contact-info-item" title="256-678-888" name="SMS"/>
          <EmployeeListItem className="contact-info-item" title="bobTheBuilder@gmail.com" name="Email"/>

      </div>

    
    </div>
  );
}
