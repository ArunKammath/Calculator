import Result from "./result";
function Add(props) {
  let { state, setState } = Result();
  function handleClick() {
    state = state + props.value;
    setState(state);
    console.log("Add", state);
  }
  return <button onClick={handleClick}>Add</button>;
}
function Button(props) {
  let name = props.name;
  let value = props.value;
  if (name === "Add") {
    return <Add value={value} />;
  }
}
export default Button;
