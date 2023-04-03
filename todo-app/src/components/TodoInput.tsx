import { StyleSheet, TextInput } from "react-native";
import { useTodos } from "../contexts/TodosContext";

import COLORS from "../constants/colors";

type Props = {};

export default function TodoInput({}: Props) {
  const { todoInput, handleTodoInput } = useTodos();

  return (
    <TextInput
      value={todoInput}
      onChangeText={(text) => {
        handleTodoInput(text);
      }}
      style={styles.textInput}
      placeholder="Add Todos here!"
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    marginRight: 16,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
