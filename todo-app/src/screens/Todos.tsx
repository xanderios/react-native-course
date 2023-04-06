import { View, FlatList } from "react-native";

import TodoCard from "src/components/TodoCard";
import TodoModal from "src/components/TodoModal";
import ButtonComponent from "src/components/ButtonComponent";
import { useTodos } from "src/contexts/TodosContext";

type Props = {};

export default function Todos({}: Props) {
  const { openTodosModal, todos } = useTodos();

  return (
    <View className="bg-gray-900 bgpur p-4 h-full justify-center items-center">
      <TodoModal />

      {todos.length > 0 ? (
        <View className="w-full h-full">
          <FlatList
            data={todos}
            alwaysBounceVertical={false}
            keyExtractor={(item, index) => String(index)}
            contentContainerStyle={{ marginBottom: 16 }}
            renderItem={({ item, index }) => (
              <TodoCard todo={item} index={index} />
            )}
          />
          <ButtonComponent
            text="Add another Todo"
            onPress={openTodosModal}
            classNameProp="mt-4 rounded-lg bg-blue-700"
          />
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
