import { View, FlatList, ScrollView } from "react-native";

import TodoCard from "src/components/TodoCard";
import TodoModal from "src/components/TodoModal";
import ButtonComponent from "src/components/ButtonComponent";
import { useTodos } from "src/contexts/TodosContext";

type Props = {};

export default function Todos({}: Props) {
  const { openTodosModal, todos } = useTodos();

  return (
    <View className="bg-gray-900 h-full justify-center items-center">
      <TodoModal />

      {todos.length > 0 ? (
        <View className="w-full h-full">
          <View className="flex-1 pt-4 px-4">
            <ScrollView alwaysBounceVertical={true}>
              {todos.map((todo) => (
                <TodoCard todo={todo} index={todo.id} />
              ))}
            </ScrollView>
          </View>
          <View className="p-4 bg-gray-800">
            <ButtonComponent
              text="Add another Todo"
              onPress={openTodosModal}
              classNameProp="bg-blue-700"
            />
          </View>
        </View>
      ) : (
        <ButtonComponent
          text="Add your first Todo!"
          onPress={openTodosModal}
          classNameProp="mt-4 rounded-lg bg-blue-700"
        />
      )}
    </View>
  );
}
