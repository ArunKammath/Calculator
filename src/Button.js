function Add(props) {
  function handleClick() {
    console.log(props.value());
    let newStateVal = props.result + props.value();
    props.setValue(newStateVal);
  }
  return <button onClick={handleClick}>Add</button>;
}
function Subtract(props) {
  function handleClick() {
    let newStateVal = props.result - props.value();
    props.setValue(newStateVal);
  }
  return <button onClick={handleClick}>Subtract</button>;
}
function Button(props) {
  let name = props.name;
  let value = props.value;
  let setValue = props.setValue;
  let result = props.result;

  if (name === "Add") {
    return <Add value={value} result={result} setValue={setValue} />;
  } else if (name === "Subtract") {
    return <Subtract value={value} result={result} setValue={setValue} />;
  }
}
export default Button;
