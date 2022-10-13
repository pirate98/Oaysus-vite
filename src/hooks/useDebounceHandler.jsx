import { useState } from "react";

export const useDebounceHandler = (func) => {
  const [intervalId, setIntervalId] = useState(undefined);

  return (...args) => {
    clearTimeout(intervalId);

    const _intervalId = setTimeout(() => func.apply(this, args), 500);
    setIntervalId(_intervalId);
  };
};
