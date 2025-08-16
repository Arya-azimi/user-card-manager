import { useState } from "react";

function useInput(defaultValue = "") {
  const [value, setValue] = useState<string>(defaultValue);

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return [value, setValue, onValueChange] as const;
}

export { useInput };
