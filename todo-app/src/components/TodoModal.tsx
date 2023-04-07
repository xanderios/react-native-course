import { Modal, TextInput, View, Image } from "react-native";
import colors from "tailwindcss/colors";

import { useTodos } from "src/contexts/TodosContext";
import ButtonComponent from "src/components/ButtonComponent";

type Props = {};

export default function TodoModal({}: Props) {
  const {
    showTodosModal,
    closeTodosModal,
    todoTitleInput,
    handleTodoTitleInput,
    todoDescriptionInput,
    handleTodoDescriptionInput,
    addTodo,
  } = useTodos();

  return (
    <Modal visible={showTodosModal} animationType="slide">
      <View className="flex-1 bg-gray-950 items-center justify-center">
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
            className="bg-white text-gray-900 border-b-4 border-gray-300 rounded-lg p-4"
            placeholderTextColor={colors.gray[500]}
            placeholder="Title"
          />
          <TextInput
            value={todoDescriptionInput}
            onChangeText={(text) => {
              handleTodoDescriptionInput(text);
            }}
            className="bg-white text-gray-900 border-b-4 border-gray-200 rounded-lg p-4 mt-4 h-24"
            style={{ verticalAlign: "top" }} // TODO: className="align-top" does not work
            placeholderTextColor={colors.gray[500]}
            placeholder="Description"
          />
        </View>
        <View className="flex-row justify-center gap-x-4 mt-4 px-4">
          <View className="flex-1">
            <ButtonComponent
              onPress={closeTodosModal}
              text="Cancel"
              classNameProp="bg-gray-700 border-gray-800"
            />
          </View>
          <View className="flex-1">
            <ButtonComponent
              onPress={addTodo}
              text="Add Todo"
              classNameProp="bg-blue-700 border-blue-800"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
