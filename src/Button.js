import Result from "./result";
function Add(props) {
  function handleClick() {
    let newStateVal = 10 + props.value; // state is immutable
    props.setValue(newStateVal);
    console.log("Add", newStateVal);
  }
  return <button onClick={handleClick}>Add</button>;
}
function Button(props) {
  let name = props.name;
  let value = props.value;
  let setValue = props.setValue;

  if (name === "Add") {
    return <Add value={value} setValue={setValue}/>;
  }
}
export default Button;
