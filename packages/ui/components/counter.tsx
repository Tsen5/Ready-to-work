import { FC, useState } from "react";

export const Counter: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <button id="counter" type="button" onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};
