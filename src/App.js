import React, { Component } from 'react';
import Employee from "./components/Employee";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import employees from "./employees.json";


class App extends Component {

  state={
    employees
  };
  
  render() {
    return (
    <div className="container">
      <Navbar />
      <Search />
      <table className="table">
          <thead className="thead-light">
              <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Title</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              </tr>
          </thead>
          <tbody>
            {this.state.employees.map(employee => (
              <Employee 
                id={employee.id}
                key={employee.id}
                name={employee.name}
                title={employee.title}
                email={employee.email}
                phone={employee.phone}
              />
            ))}
        </tbody>
      </table>
    </div>
    )
  }
}

export default App;
