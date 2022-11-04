import { useState } from "react";
import "./App.css";

function Buttons() {
  return (
    <div className="buttonsRoot">
      <CreateButton value={1} className="buttons" />
      <CreateButton value={2} className="buttons" />
      <CreateButton value={3} className="buttons" />
      <CreateButton value={4} className="buttons" />
      <CreateButton value={5} className="buttons" />
      <CreateButton value={6} className="buttons" />
      <CreateButton value={7} className="buttons" />
      <CreateButton value={8} className="buttons" />
      <CreateButton value={9} className="buttons" />
      <CreateButton value={0} className="buttons" />
    </div>
  );
}
function CreateButton(props) {
  return <button className={props.className}>{props.value}</button>;
}

function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <Buttons />
    </div>
  );
}

export default App;
