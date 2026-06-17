import { useMemo, useState } from "react";
import debounce from "./utils/debounce";
import throttle from "./utils/Throttle";
import Deferred from "./Deferred";

export default function App() {
  const [valueD, setValueD] = useState("");
  const [valueth, setValueth] = useState("");

  // throttle ------------
  const throttledLog = useMemo(
    () =>
      throttle((value) => {
        console.log("Searching:", value);
      }, 2000),
    [],
  );

  function handleChangeth(e) {
    setValueth(e.target.value);
    throttledLog(e.target.value);
  }

  //dbounce ----------------
  const debouncedLog = debounce((inputValue) => {
    console.log("value:", inputValue);
  }, 2000);

  function handleChange(e) {
    setValueD(e.target.value);
    debouncedLog(e.target.value);
  }
  // ------------

  return (
    <div>
      <input
        type="text"
        value={valueD}
        onChange={handleChange}
        placeholder="debounce..."
      />
      <input
        type="text"
        value={valueth}
        onChange={handleChangeth}
        placeholder="throttle..."
      />

      <Deferred />
    </div>
  );
}
