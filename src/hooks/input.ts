import { ChangeEvent, useState } from 'react';

type useInputProps = {
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  }

export default function useInput(initialValue = ''): useInputProps {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange
  };
}
