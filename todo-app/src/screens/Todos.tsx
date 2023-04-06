import { View, FlatList, StatusBar } from "react-native";

import TodoCard from "src/components/TodoCard";
import TodoModal from "src/components/TodoModal";
import ButtonComponent from "src/components/ButtonComponent";
import { useTodos } from "src/contexts/TodosContext";

type Props = {};

export default function Todos({}: Props) {
  const { openTodosModal, todos } = useTodos();

  return (
    <View className="bg-blue-950 p-4 h-full justify-center items-center">
      <StatusBar barStyle="light-content" />
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
            className="mt-4 rounded-lg bg-blue-800"
          />
        </View>
      ) : (
        <ButtonComponent
          text="Add your first Todo!"
          onPress={openTodosModal}
          className="mt-4 rounded-lg bg-blue-800"
        />
      )}
    </View>
  );
}
