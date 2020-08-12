import React, {Component} from "react";
import employees from "../employees.json";


class Employee extends Component {
  state={   
    search: ""
  };

  // onSubmit = event => {
  //   event.preventDefault();
  //   console.log("Event Target Value is:", event.target.value);
  // }

  handleChange = event => {
      event.preventDefault();
      this.setState = ({
        search: event.target.value
      });
    //do I need: this.onChange(event.target.value)
    console.log("I am in the HandleInputChange", this.setState);
    //   debugger;
  }

  filteredEmployees = (employee) => {
    let filteredEmployees = this.state.search
    filteredEmployees=filteredEmployees.filter((employee) => {
      let employeeName =employee.name.toLowerCase()
      console.log("this is the filteredEmployees", filteredEmployees)
      return employeeName.indexOf(filteredEmployees.toLowerCase()) !== -1
    })
    // Do I need the following below?  
    //this.setState({
    //   filteredEmployees
    // })
  }
 
  // debugger;
  // renderRow = () =>{

  //   if (this.state.search === ""){
  //       //return a filtered result 
    
  //       return (

  //       )
  //   } else (
        
  //       return (
        
  //         {employees.map(item=> 
  //               <tr>
  //               <th scope="row">{item.id}</th>

  //               {/* turnitary statements??? */}
  //               <td>{item.name}</td>
  //               <td>{item.title}</td>
  //               <td>{item.email}</td>
  //               <td>{item.phone}</td>
  //               </tr>
  //           )
  //         }
  //       )
  //   }

  render(){
    return (
        <div>
            <form onSubmit={this.onSubmit}>
            <input
                search={this.state.search}
                onChange={this.handleChange}
                type="input"
                placeholder="Name of employee"
            />
            {/* <input type="submit" value="search" class="btn btn-primary"/> */}
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
            {/* filter or map employee by row
                  {this.renderRow()} */}
                {employees.map(item=> 
                 <tr>
                 <th scope="row">{item.id}</th>
                 <td>{item.name}</td>
                 <td>{item.title}</td>
                 <td>{item.email}</td>
                 <td>{item.phone}</td>
                 </tr>
                 )}
                </tbody>
            </table>
        </div>
    );
  }
}

export default Employee;