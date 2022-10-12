import { Dispatch, SetStateAction, ChangeEvent, useMemo } from 'react'
import { Label, Input } from 'theme-ui'
import detachDebugger from '../../utils/detachDebugger'
import debounce from 'lodash.debounce'

interface DebouncedInputProps {
  name: string
  title: string
  value: string
  setValue: Dispatch<SetStateAction<string>>
  onChange: () => void
  mb?: string
}

const DebouncedInput = ({
  name,
  title,
  value,
  setValue,
  onChange,
  mb,
}: DebouncedInputProps) => {
  const debouncedChangeHandler = useMemo(
    () =>
      debounce((e) => {
        detachDebugger()
        chrome.storage.local.set({ [name]: e.target.value })
      }, 300),
    [name]
  )

  const changeInputText = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange()
    debouncedChangeHandler(e)
  }

  return (
    <>
      <Label htmlFor={name}>{title}</Label>
      <Input name={name} value={value} onChange={changeInputText} mb={mb} />
    </>
  )
}

export default DebouncedInput