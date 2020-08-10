import React from "react";

function Employee(props){
 return (
<div>
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