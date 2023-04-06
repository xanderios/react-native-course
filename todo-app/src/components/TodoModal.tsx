import { Modal, StyleSheet, TextInput, View, Image } from "react-native";
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
          <Image
            source={require("~/assets/images/goal.png")}
            style={styles.todoImage}
          />
          <TextInput
            value={todoTitleInput}
            onChangeText={(text) => {
              handleTodoTitleInput(text);
            }}
            style={styles.input}
            placeholderTextColor={COLORS.white}
            placeholder="Title"
          />
          <TextInput
            value={todoDescriptionInput}
            onChangeText={(text) => {
              handleTodoDescriptionInput(text);
            }}
            style={[styles.input, styles.descriptionInput]}
            placeholderTextColor={COLORS.white}
            placeholder="Description"
          />
        </View>
        <View style={styles.buttonsContainer}>
          <ButtonComponent
            onPress={closeTodosModal}
            text="Cancel"
            customStyle={styles.cancelButton}
          />
          <ButtonComponent
            onPress={addTodo}
            text="Add Todo"
            customStyle={styles.addTodoButton}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalWrapper: {
    height: "100%",
    backgroundColor: COLORS["navy-900"],
    alignItems: "center",
    justifyContent: "center",
  },
  todoImage: {
    borderRadius: 999,
    alignSelf: "center",
    height: 100,
    width: 100,
    margin: 20,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 16,
  },
  input: {
    backgroundColor: COLORS["navy-900"],
    color: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  descriptionInput: {
    marginTop: 16,
    height: 100,
    verticalAlign: "top",
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
    backgroundColor: COLORS["navy-600"],
  },
  cancelButton: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.red,
  },
});
