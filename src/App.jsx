import React from "react"
import Navbar from "./components/Navbar" 
import Filter from "./components/Filter"

export default function App() {
  

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2 bg-slate-500">
     <Navbar /> 
     <div className=" bg-bgDark2 bg-slate-500">
      <Filter /> 
      {/* <Cards /> */}
     </div>
     
    </div>
  )
}