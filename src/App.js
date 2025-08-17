//import logo from './logo.svg';
import { useState } from "react";
import "./App.css"; // optional styling

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleEqual = () => {
    if (input.trim() === "") {
      setResult("Error");
      return;
    }
    try {
      // Evaluate safely
      const evalResult = eval(input); // will handle BODMAS
      setResult(evalResult);
    } catch (e) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {/* Digits */}
        {[1,2,3,4,5,6,7,8,9,0].map((num) => (
          <button key={num} onClick={() => handleClick(num.toString())}>
            {num}
          </button>
        ))}

        {/* Operators */}
        {["+", "-", "*", "/"].map((op) => (
          <button key={op} onClick={() => handleClick(op)}>
            {op}
          </button>
        ))}

        {/* Equal & Clear */}
        <button onClick={handleEqual}>=</button>
        <button onClick={handleClear}>C</button>
      </div>

      {/* Result display */}
      <div className="result">{result}</div>
    </div>
  );
}

export default App;
