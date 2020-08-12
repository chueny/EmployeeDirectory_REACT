import React from "react";
// import employees from "../employees.json";

function Employee(props){

// state={
//     employees
// };

return (
    <div>
        <form>
        <input
           // value={this.state.password}
            name="password"
            //onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          {" "}
          <button type="submit" class="btn btn-primary" >Search</button>
          {/* <button onClick={this.handleFormSubmit}>Submit</button> */}
        </form>
        {"  "}


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
        {/* Mapping each employee by row */}
            {props.employees.map(item=> 
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

export default Employee;