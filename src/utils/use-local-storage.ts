import { SetStateAction, useCallback, useEffect, useState } from "react";
import { isDefined } from "./is-defined";

type UseCacheState = {
  <T>(key: string): [T | undefined, (next: SetStateAction<T>) => void];
  <T>(key: string, initialState: T): [T, (next: SetStateAction<T>) => void];
};

export const useLocalStorage: UseCacheState = <T>(
  key: string,
  initialState?: T,
) => {
  const [state, setState] = useState<T>(() => {
    const cachedValue = localStorage.getItem(key);
    if (isDefined(cachedValue)) return JSON.parse(cachedValue);
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  const setCache = useCallback(
    (next: SetStateAction<T>) => {
      setState((prev) => {
        const newValue = next instanceof Function ? next(prev) : next;
        localStorage.setItem(key, JSON.stringify(newValue));
        return newValue;
      });
    },
    [key],
  );

  return [state, setCache];
};
