import { useState } from "react";

export const useDebounceHandler = (func) => {
  const [intervalId, setIntervalId] = useState(undefined);

  return (...args) => {
    clearTimeout(intervalId);

    const _intervalId = setTimeout(() => {
      // console.log("apply debounce handler");
      func.apply(this, args);
    }, 1000);
    setIntervalId(_intervalId);
  };
};
