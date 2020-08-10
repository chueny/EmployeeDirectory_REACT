import React from "react";

function Employee(props){
 return (
<div>
 <p>Employee!</p>
 <p>Name:</p> {props.name}
 <p>Email:</p> {props.email}
 </div>
 );
}

export default Employee;