import React from "react";

function Employee(props){
 return (
     <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.title}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
    </tr>
 );
}

export default Employee;