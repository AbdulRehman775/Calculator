import React,{useState} from "react";
import DisplayScreen from "./DisplayScreen";
const InputArea = () => {
    const [result, setResult] = useState("");
    const [hasAction, setHasAction] = useState("");
    const [int, setInt] = useState([]);
    const [calc, setCalc] = useState(0);
    const clickHandle = (e) => {
        setResult(result + e.target.name);
    };

    const clickAction = (e) => {
        const convInt = Number(result);
        setInt([...int, convInt]);

        setHasAction(e.target.name);
        setResult("");
    }

    const clickEqual = () => {

        const convInt = Number(result); // parse display as number
        setInt([...int, convInt]);

        if (hasAction && int.length >= 2) {
            let sum = 1;
            let answer;
            switch (hasAction) {
                case "X" :
                     sum = 1;
                    for (let i = 0; i < int.length; i++) { // loop through int array
                        sum *= int[i]; // add each element to sum
                    }
                    answer = sum; // set answer to sum
                    break;
                case "+" :
                   sum = 0;
                    for (let i = 0; i < int.length; i++) { // loop through int array
                        sum += int[i]; // add each element to sum
                    }
                    answer = sum; // set answer to sum
                    break;
                case "-" :
                    sum = 0;
                    for (let i = 0; i < int.length; i++) { // loop through int array
                        sum -= int[i]; // add each element to sum
                    }
                    answer = sum; // set answer to sum
                    break;
                case "/" :
                    sum = 1;
                    for (let i = 0; i < int.length; i++) { // loop through int array
                        sum /= int[i]; // add each element to sum
                    }
                    answer = sum; // set answer to sum
                    break;
                default :
                    answer = 0;
            }
            setHasAction("");
            setResult(String(answer));
            setInt([answer]);
        }
    }



    return(
       <>
           <div className="card-title">
            <div className="container pt-5 rounded-pill bg-secondary">
        <DisplayScreen result = {result}  />
            </div>
        </div>
        <div className="card-body row row-cols-4  g-4">

            <div className="col">
                <button name = "1" onClick = {clickHandle} className="btn btn-info  p-3 ">
                1
                </button>

            </div>
            <div className="col">
                <button name = "2" onClick = {clickHandle} className="btn p-3 btn-info">
                    2
                </button>
            </div>
            <div className="col">
                <button name = "3" onClick = {clickHandle} className="btn btn-info p-3">
                    3
                </button>
            </div>
            <div className="col">
                <button name = "/" onClick = {clickAction} className="btn btn-warning text-dark p-3">
                    <i className="fa-solid fa-divide"></i>
                </button>
            </div>
            <div className="col">
                <button name = "4" onClick ={clickHandle} className="btn btn-info p-3">
                    4
                </button>
            </div>
            <div className="col">
                <button name = "5" onClick = {clickHandle} className="btn btn-info p-3">
                    5
                </button>
            </div>
            <div className="col">
                <button name = "6" onClick ={clickHandle} className="btn btn-info p-3">
                    6
                </button>
            </div>
            <div className="col">
                <button onClick = {clickAction} name = "X" className="btn btn-warning p-3 text-dark  ">
                    X
                </button>
            </div>
            <div name = "7" onClick = {clickHandle} className="col">
                <button className="btn btn-info p-3">
                    7
                </button>
            </div>
            <div className="col">
                <button name = "8" onClick = {clickHandle} className="btn btn-info p-3">
                    8
                </button>
            </div>
            <div name = "9" onClick = {clickHandle} className="col">
                <button className="btn btn-info p-3">
                    9
                </button>
            </div>
            <div className="col">
                <button onClick = {clickAction} name = "-" className="btn btn-warning text-dark p-3">
                    -
                </button>
            </div>
            <div  onClick = {clickHandle} className="col-6 btn btn-info border rounded-pill border-info">
                <button name = "0" className="btn   p-4">
                    0
                </button>
            </div>


            <div className="col">
                <button onClick = {clickEqual}name = "=" className="btn btn-dark text-light p-3">
                    =
                </button>
            </div>


            <div className="col">
                <button onClick = {clickAction} name = "+" className="btn btn-warning text-dark p-3">
                    +
                </button>
            </div>

        </div>
    </>
    );
}

export default InputArea;