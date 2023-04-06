import { Modal, StyleSheet, TextInput, View } from "react-native";
import { useTodos } from "src/contexts/TodosContext";

import COLORS from "src/constants/colors";
import ButtonComponent from "src/components/ButtonComponent";

type Props = {};

export default function TodoModal({}: Props) {
  const {
    todosModal,
    closeTodosModal,
    todoTitleInput,
    handleTodoTitleInput,
    todoDescriptionInput,
    handleTodoDescriptionInput,
    addTodo,
  } = useTodos();

  return (
    <Modal visible={todosModal} animationType="slide">
      <View style={styles.modalWrapper}>
        <View style={styles.inputContainer}>
          <TextInput
            value={todoTitleInput}
            onChangeText={(text) => {
              handleTodoTitleInput(text);
            }}
            style={styles.input}
            placeholder="Title"
          />
          <TextInput
            value={todoDescriptionInput}
            onChangeText={(text) => {
              handleTodoDescriptionInput(text);
            }}
            style={[styles.input, styles.descriptionInput]}
            placeholder="Description"
          />
        </View>
        <View style={styles.buttonsContainer}>
          <ButtonComponent
            onPress={addTodo}
            text="Add Todo"
            customStyle={styles.addTodoButton}
          />
          <ButtonComponent
            onPress={closeTodosModal}
            text="Cancel"
            customStyle={styles.cancelButton}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalWrapper: {
    height: "100%",
    backgroundColor: COLORS.offWhite,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 16,
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  descriptionInput: {
    marginTop: 16,
    height: 100,
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  addTodoButton: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  cancelButton: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.red,
  },
});
