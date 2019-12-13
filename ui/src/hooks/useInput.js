import React, {useState} from 'react';

export const useInput = (defaultValue, props) => {
  let [value, setValue] = useState(defaultValue);
  let onChange = (e) => setValue(e.target.value);
  return {value, onChange, ...props}
};
