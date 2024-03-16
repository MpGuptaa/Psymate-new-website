import { useState, useEffect } from "react";

const UseLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      }
    } catch (error) {}
    return initialValue;
  });

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const setValue = (value) => {
          try {
            const valueToStore =
              value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
          } catch (error) {}
        };

        window.setValue = setValue;
      }
    } catch (error) {}
  }, [key, storedValue]);

  return [storedValue];
};

export default UseLocalStorage;
