import "./App.css";
import Button from "./Button.js";
import Result from "./result.js";

function Title(props) {
  return (
    <div>
      <h1>{props.msg}</h1>
    </div>
  );
}
function App() {
  let { state, setState } = Result(0);
  return (
    <div>
      <Title msg="My Calculator" />
      <h1>{state}</h1>
      <Button name="Add" value={state} setValue={setState} />
    </div>
  );
}

export default App;
