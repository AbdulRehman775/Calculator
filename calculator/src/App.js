import React,{useState} from "react";
import {Calculator} from "./Components";

const App = () => {
 const[check,setCheck] = useState(false);
  return (
      <>
        <nav className = "navbar nav bg-dark">
       <div class = "container">
         <h2 className = "text-light ms-5">
          Calculator App
        </h2>
       <button onClick = { () => {setCheck(true)}} className = "btn btn-outline-info fs-1 ms-auto">
         Start
       </button>
       </div>
        </nav>

        { check &&(
           <> <button className = "btn btn-outline-info fs-1" onClick = {() => {setCheck(false)}} > Stop </button>
            <Calculator/>
             </>) }
      </>
  );
}

export default App;
