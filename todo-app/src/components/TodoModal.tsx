import { Modal, TextInput, View, Image } from "react-native";
import colors from "tailwindcss/colors";

import { useTodos } from "src/contexts/TodosContext";
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
      <View className="h-full bg-blue-950 items-center justify-center">
        <View className="w-full px-4">
          <Image
            source={require("~/assets/images/goal.png")}
            className="rounded-full self-center h-24 w-24 m-5"
          />
          <TextInput
            value={todoTitleInput}
            onChangeText={(text) => {
              handleTodoTitleInput(text);
            }}
            className="bg-blue-950 text-white border border-white rounded-lg p-4"
            placeholderTextColor={colors.white}
            placeholder="Title"
          />
          <TextInput
            value={todoDescriptionInput}
            onChangeText={(text) => {
              handleTodoDescriptionInput(text);
            }}
            className="bg-blue-950 text-white border border-white rounded-lg p-4 mt-4 h-24 align-top"
            placeholderTextColor={colors.white}
            placeholder="Description"
          />
        </View>
        <View className="w-24 flex-row justify-center gap-4 mt-4 px-4">
          <ButtonComponent
            onPress={closeTodosModal}
            text="Cancel"
            className="flex-1 items-center bg-blue-800"
          />
          <ButtonComponent
            onPress={addTodo}
            text="Add Todo"
            className="flex-1 items-center bg-red-500"
          />
        </View>
      </View>
    </Modal>
  );
}
