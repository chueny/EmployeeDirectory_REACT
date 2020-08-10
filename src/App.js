import React from 'react';
import Employee from "./components/Employee";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import employees from "./employees.json";


function App() {
  return (
  <div className="container">
    <Navbar />
    <Search />
    <Employee 
      name={employees[0].name}
      title={employees[0].title}
      email={employees[0].email}
    />
     <Employee 
      name={employees[10].name}
      title={employees[10].title}
      email={employees[10].email}
    />
    
    <Employee 
      name={employees[11].name}
      title={employees[11].title}
      email={employees[11].email}
    />

  </div>
  );
}

export default App;
