import React, { useState } from "react";
import "./App.css";
function Calculator() {
  const [display, setDisplay] = useState("0");
  const handleButtonClick = (value) => {
    if (display === "0" || display === "Error") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };
  const handleCalculate = () => {
    try {
      setDisplay(eval(display));
    } catch (error) {
      setDisplay("Error");
    }
  };
  const handleClear = () => {
    setDisplay("0");
  };
  return (
    <div className="calculator">
      <div className="calculator-screen"><p style={{paddingRight:"20px"}}>{display}</p></div>
      <div style={{width:"300px"}} className="calculator-buttons">
        <table>
          <tr>
            <td >
              <table style={{width:"200px",marginLeft:"15px"}}>
                <tr style={{height:"60px"}}>
                  <td>
                  <button onClick={handleButtonClick.bind(this, "7")}>7</button>
                  </td>
                  <td>
                  <button onClick={handleButtonClick.bind(this, "8")}>8</button>
                  </td>
                  <td>
                  <button onClick={handleButtonClick.bind(this, "9")}>9</button>
                  </td>
                </tr>
                <tr style={{height:"60px"}}>
                  <td>
                  <button onClick={handleButtonClick.bind(this, "4")}>4</button>
                  </td>
                  <td>
                  <button onClick={handleButtonClick.bind(this, "5")}>5</button>
                  </td>
                  <td>
                  <button onClick={handleButtonClick.bind(this, "6")}>6</button>
                  </td>
                </tr>
                <tr style={{height:"60px"}}>
                  <td>
                  <button onClick={handleButtonClick.bind(this, "1")}>1</button>
                  </td>
                  <td>
                  <button onClick={handleButtonClick.bind(this, "2")}>2</button>
                  </td>
                  <td>
                  <button onClick={handleButtonClick.bind(this, "3")}>3</button>
                  </td>
                </tr>
                <tr style={{height:"60px"}}>
                  <td>
                  <button onClick={handleButtonClick.bind(this, "0")}>0</button>
                  </td>
                  <td>
                  <button onClick={handleButtonClick.bind(this, ".")}>.</button>
                  </td>
                  <td>
                  <button onClick={handleCalculate} className="operator">=</button>
                  </td>
                </tr>
              </table>
            </td>
            <td >
              <table >
                <tr style={{height:"5px"}}>
                <button style={{color: "#404090"}} onClick={handleClear} className="clear">⌫</button>
                </tr>
                <tr style={{height:"5px"}}>
                <button style={{color: "#404090",fontSize:"27px"}} onClick={handleButtonClick.bind(this, "/")} >÷</button>
                </tr>
                <tr style={{height:"5px"}}>
                <button style={{color: "#404090",fontSize:"25px"}} onClick={handleButtonClick.bind(this, "*")} >×</button>
                </tr>
                <tr style={{height:"5px"}}>
                <button style={{color: "#404090",fontSize:"30px"}} onClick={handleButtonClick.bind(this, "-")} >-</button>
                </tr>
                <tr style={{height:"5px"}}>
              <button style={{color: "#404090",fontSize:"25px"}} onClick={handleButtonClick.bind(this, "+")} >+</button>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default Calculator;