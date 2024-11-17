import "./App.css";
import Button from "./Button.js";
import Result from "./result.js";

function Title(props) {
  let { state } = Result();
  console.log("state", state);
  return (
    <div>
      <h1>{props.msg}</h1>
      <h1>{state}</h1>
    </div>
  );
}
function App() {
  return (
    <div>
      <Title msg="My Calculator" />
      <Button name="Add" value={10} />
    </div>
  );
}

export default App;
