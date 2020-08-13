import React, { Component } from "react";
import "../styles/Employee.css";
import employees from "../employees.json";

class Employee extends Component {
  state = {
    search: "",
    filteredEmployees: [],
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      search: event.target.value,
    });
    console.log("I am in the HandleInputChange", this.state.search);
    this.filteredEmployees();
  };

  filteredEmployees = () => {
    const employee = this.state.search;
    console.log("What is this.state.search:", this.state.search);
    const filteredEmployees = employees
      .filter((item) => {
        console.log("Item:", item.name);
        return item.name.includes(employee);
      })
      .sort((a, b) => {
        return a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1;
      });
    console.log(filteredEmployees);
    //filter method: loop through array and for each item (employee), checks and return that item(employee) match parameter
    this.setState({
      filteredEmployees,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="searchForm">
          <row>
            <p>
              Search for employee: {"  "}
              <input
                search={this.state.search}
                onChange={this.handleChange}
                type="input"
                placeholder="  Name of employee"
              />
            </p>
          </row>
        </form>

        {/* Table header for all the employees */}
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
            {/* filter or map employee depending on search */}
            {!this.state.search
              ? employees.map((item) => (
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.title}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                  </tr>
                ))
              : this.state.filteredEmployees.map((item) => (
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.title}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Employee;
