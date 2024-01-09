import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import Sidebar from "./Sidebar";
import Head from "./Head";

function App() {
  const[openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar=()=>{
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className="grid-cotainer">
    <Head OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} 
      OpenSidebar={OpenSidebar}
      />      
      <Home />
    </div>
  );
}

export default App;
