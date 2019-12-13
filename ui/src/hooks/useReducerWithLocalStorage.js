import { useReducer, useEffect } from 'react'

export const useReducerWithLocalStorage = (reducer, defaultState, storageKey, init = null) => {
  const [state, dispatch] = useReducer(reducer, defaultState, (defaultState) => {
    const persisted = JSON.parse(localStorage.getItem(storageKey));
    return persisted !== null
      ? persisted
      : init !== null ? init(defaultState) : defaultState
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(state))
  }, [storageKey, state]);

  return [state, dispatch];
};
