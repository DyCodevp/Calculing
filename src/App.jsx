import { useState } from "react";
import "./App.css";

// function ShowALL(Number) {
//   const { total, setTotal } = useState("0");

//   if (Number === total) return setTotal((total) => total + Number);
//   return (
//     <div className="Cointeiner-bar">
//       <span id="bar">{Number}</span>
//     </div>
//   );
// }

// function Operations(actualNumber) {
//   let total =
//     actualNumber.number1 + actualNumber.operation + actualNumber.number2;
//   total = total.toString();
//   result = eval(total);
//   return result;
// }

console.log(eval("1 +  2 + 3"));
console.log(eval("1 +  2 + 3"));
function Buttons() {
  return (
    <div className="buttonsRoot">
      <button type="text" className="buttons">
        1
      </button>
      <button type="text" className="buttons">
        2
      </button>
      <button type="text" className="buttons">
        3
      </button>
      <button type="text" className="buttons">
        4
      </button>
      <button type="text" className="buttons">
        5
      </button>
      <button type="text" className="buttons">
        6
      </button>
      <button type="text" className="buttons">
        7
      </button>
      <button type="text" className="buttons">
        8
      </button>
      <button type="text" className="buttons">
        9
      </button>
    </div>
  );
}
function SpecialButtons() {
  return (
    <div className="specialButtonRoot">
      <button type="text" className="buttonSpecial">
        +
      </button>
      <button type="text" className="buttonSpecial">
        -
      </button>
      <button type="text" className="buttonSpecial">
        .
      </button>
      <button type="text" className="buttonSpecial">
        =
      </button>
      <button type="text" className="buttonSpecial">
        *
      </button>
      <button type="text" className="buttonSpecial">
        /
      </button>
      <button type="text" className="buttonSpecial">
        C
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <Buttons />
      <SpecialButtons />
    </div>
  );
}

export default App;
