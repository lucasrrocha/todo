import { useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import { Container } from "./styles";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}


export function Input({ inputRef, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false)

  function handleOnFocus() {
    setIsFocused(true)
  }

  function handleOnBlur() {
    setIsFocused(false)
  }

  return (
    <Container
      isFocused={isFocused}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      ref={inputRef}
      {...rest}
    />

  )
}