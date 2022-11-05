import { useState } from "react";
import "./App.css";

function Calculator() {
  const [display, setDisplay] = useState(0);
  function handleNumber(value) {
    setDisplay(`${display}` + value);
  }
  function handleOperator(value) {
    setDisplay(display + value);
  }
  function handleTotal() {
    let evaluation = eval(display);
    setDisplay(evaluation);
  }

  return (
    <div className="buttonsRoot">
      <div className="display">{display}</div>
      <CreateButton onClick={handleNumber} value={7} className="buttons" />
      <CreateButton onClick={handleNumber} value={8} className="buttons" />
      <CreateButton onClick={handleNumber} value={9} className="buttons" />
      <CreateButton
        onClick={handleOperator}
        value={"*"}
        className="operatorButtons"
      />

      <CreateButton onClick={handleNumber} value={4} className="buttons" />
      <CreateButton onClick={handleNumber} value={5} className="buttons" />
      <CreateButton onClick={handleNumber} value={6} className="buttons" />
      <CreateButton
        onClick={handleOperator}
        value={"-"}
        className="operatorButtons"
      />

      <CreateButton onClick={handleNumber} value={1} className="buttons" />
      <CreateButton onClick={handleNumber} value={2} className="buttons" />
      <CreateButton onClick={handleNumber} value={3} className="buttons" />
      <CreateButton
        onClick={handleOperator}
        value={"+"}
        className="operatorButtons"
      />

      <CreateButton
        onClick={handleOperator}
        value={"C"}
        className="operatorButtons"
      />
      <CreateButton onClick={handleNumber} value={0} className="buttons" />
      <CreateButton
        onClick={handleOperator}
        value={"."}
        className="operatorButtons"
      />
      <CreateButton
        onClick={handleTotal}
        value={"="}
        className="operatorButtons"
      />
    </div>
  );
}
function CreateButton(props) {
  return (
    <button
      onClick={() => props.onClick(props.value)}
      className={props.className}
    >
      {props.value}
    </button>
  );
}

function App() {
  return (
    <div className="App-container">
      <h1>Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;
