import React from 'react';
import Employee from "./components/Employee";
import Navbar from "./components/Navbar";
import employees from "./employees.json";


function App () {
  return (
    <div className="container">
      <Navbar />
      <Employee employees={employees} />
    </div>
  )
}

export default App;
