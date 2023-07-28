import React from "react";
import DisplayScreen from "./DisplayScreen";
import InputArea from "./InputArea";
const Calculator = () => {

return(
   <section>
       <div className="row justify-content-center mb-5">
           <div className="col-4">
               <div className="card bg-dark p-3 justify-content-center m-5">
       <DisplayScreen/>
       <InputArea/>
               </div>
           </div>
       </div>
 </section>
);
}

export default Calculator;