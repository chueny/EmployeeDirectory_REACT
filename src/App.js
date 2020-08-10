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
    <Employee employees ={employees} />
  </div>
  );
}

export default App;
