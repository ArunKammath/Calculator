import { useState } from "react";

function Result(val) {
  let [state, setState] = useState(val);
  return { state, setState };
}
export default Result;
