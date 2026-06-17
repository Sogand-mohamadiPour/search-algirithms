import { useDeferredValue, useState } from "react";

const bigList = [
  { name: "shoe", amount: 30 },
  { name: "bag", amount: 70 },
  { name: "dress", amount: 50 },
  { name: "watch", amount: 10 },
];

function Deferred() {
  const [value, setValue] = useState("");

  const deferred = useDeferredValue(value);

  const filtered = bigList.filter((item) => item.name.includes(deferred));

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {filtered.map((item) => (
        <div key={item.name}>
          <div>{item.name}</div>
          <div>{item.amount}</div>
        </div>
      ))}
    </>
  );
}

export default Deferred;
