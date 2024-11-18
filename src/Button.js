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
function Multiply(props) {
  function handleClick() {
    let newStateVal = props.result * props.value();
    props.setValue(newStateVal);
  }
  return <button onClick={handleClick}>Multiply</button>;
}
function Divide(props) {
  function handleClick() {
    let newStateVal = props.result / props.value();
    props.setValue(newStateVal);
  }
  return <button onClick={handleClick}>Divide</button>;
}

function ResetInput() {
  function handleClick() {
    document.getElementById("numberInput").value = 0.0;
  }
  let resetButton = <button onClick={handleClick}>ResetInput</button>;

  return resetButton;
}
function ResetResult(props) {
  function handleClick() {
    let newStateVal = 0.0;
    props.setValue(newStateVal);
  }
  return (
    <button onClick={handleClick} id="ResetResult">
      ResetResult
    </button>
  );
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
  } else if (name === "Multiply") {
    return <Multiply value={value} result={result} setValue={setValue} />;
  } else if (name === "Divide") {
    return <Divide value={value} result={result} setValue={setValue} />;
  } else if (name === "ResetInput") {
    return <ResetInput />;
  } else if (name === "ResetResult") {
    return <ResetResult setValue={setValue} />;
  }
}
export default Button;
