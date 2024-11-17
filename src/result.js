import { useState } from "react";

function Result() {
  let [state, setState] = useState(0);
  return { state, setState };
}
export default Result;
