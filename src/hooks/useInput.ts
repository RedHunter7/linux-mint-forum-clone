import { type ChangeEvent, useState } from 'react'

const useInput = (defaultValue = ''): [
  string,
  (event: ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const [value, setValue] = useState(defaultValue)

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
  }

  return [value, handleValueChange, setValue]
}

export default useInput
