import React, { Component } from "react";

export default class Employee extends Component {
  constructor() {
    super();
    this.state = {
      employee: [
        {
          emp_name: "Rajesh",
          emp_id: "TYSS234",
          emp_desig: "Java Developer",
        },

        {
          emp_name: "Harish",
          emp_id: "TYSS345",
          emp_desig: "SQL Developer",
        },

        {
          emp_name: "Abhi",
          emp_id: "TYSS789",
          emp_desig: "React Developer",
        },

        {
          emp_name: "Lakshmish",
          emp_id: "TYSS098",
          emp_desig: "MERN Developer",
        },
      ],
    };
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Emp Name</th>
            <th>Emp Id</th>
            <th>Emp Desig</th>
          </tr>
        </thead>
        <tbody>
          {this.state.employee.map(emp => {
            let { emp_name, emp_id, emp_desig } = emp;
            return (
              <tr>
                    <td>{emp_name}</td>
                    <td>{emp_id}</td>
                    <td>{ emp_desig}</td>
                </tr>
                
            );
          })}
        </tbody>
      </table>
    );
  }
}
