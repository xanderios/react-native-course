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
      <View className="flex-1 bg-gray-900 items-center justify-center">
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
            className="bg-gray-900 text-white border border-white rounded-lg p-4"
            placeholderTextColor={colors.white}
            placeholder="Title"
          />
          <TextInput
            value={todoDescriptionInput}
            onChangeText={(text) => {
              handleTodoDescriptionInput(text);
            }}
            className="bg-gray-900 text-white border border-white rounded-lg p-4 mt-4 h-24"
            style={{ verticalAlign: "top" }} // TODO: className="align-top" does not work
            placeholderTextColor={colors.white}
            placeholder="Description"
          />
        </View>
        <View className="flex-row justify-center gap-x-4 mt-4 px-4">
          <View className="flex-1">
            <ButtonComponent
              onPress={closeTodosModal}
              text="Cancel"
              classNameProp="bg-gray-700"
            />
          </View>
          <View className="flex-1">
            <ButtonComponent
              onPress={addTodo}
              text="Add Todo"
              classNameProp="bg-blue-700"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
