import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

import { COLORS } from "../styles/global";

type Props = {};

export default function TodoInput({}: Props) {
  const [todoInput, setTodoInput] = useState<string>("");

  const handleTodoInput = (text: string) => {
    setTodoInput(text);
  };

  return (
    <TextInput
      value={todoInput}
      onChangeText={handleTodoInput}
      style={styles.textInput}
      placeholder="Add Todos here!"
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    marginRight: 16,
    backgroundColor: COLORS["blue-100"],
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
