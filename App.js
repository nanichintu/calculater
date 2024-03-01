import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const handleResult = () => {
    setCount(eval(count));
  };

  const style = {
    backgroundColor: "green",
    color: "white",
  };
  return (
    <React.Fragment>
      <center>
        <h1>Result: {count}</h1>
        <br />

        <div className="grid">
          <button onClick={handleResult} style={style}>
            result
          </button>
          <button onClick={() => setCount(count + 1)}>1</button>
          <button onClick={() => setCount(count + 2)}>2</button>
          <button onClick={() => setCount(count + 3)}>3</button>
          <button onClick={() => setCount(count + 4)}>4</button>
          <button onClick={() => setCount(count + 5)}>5</button>
          <button onClick={() => setCount(count + 6)}>6</button>
          <button onClick={() => setCount(count + 7)}>7</button>
          <button onClick={() => setCount(count + 8)}>8</button>
          <button onClick={() => setCount(count + 9)}>9</button>
          <button onClick={() => setCount(count + 0)}>0</button>
          <button onClick={() => setCount(count + "+")}>+</button>
          <button onClick={() => setCount(count + "*")}>*</button>
          <button onClick={() => setCount(count + "%")}>%</button>
          <button onClick={() => setCount(count + "/")}>/</button>
          <button onClick={() => setCount("")}>clear</button>
        </div>
      </center>
    </React.Fragment>
  );
};

export default App;
