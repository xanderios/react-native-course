import { View, FlatList, ScrollView } from "react-native";

import TodoCard from "src/components/TodoCard";
import TodoModal from "src/components/TodoModal";
import HistoryModal from "src/components/HistoryModal";
import ButtonComponent from "src/components/ButtonComponent";
import { useTodos } from "src/contexts/TodosContext";

type Props = {};

export default function Todos({}: Props) {
  const { openTodosModal, openHistoryModal, todos } = useTodos();

  return (
    <View className="bg-gray-950 h-full justify-center items-center">
      <TodoModal />
      <HistoryModal />

      {todos.length > 0 ? (
        <View className="w-full h-full">
          <View className="flex-1 pt-4 px-4">
            <ScrollView alwaysBounceVertical={true}>
              {todos.map(
                (todo) =>
                  !todo.complete && (
                    <TodoCard
                      todo={todo}
                      options={{
                        showCompleteButton: true,
                        showCreatedAt: true,
                      }}
                      key={todo.id}
                    />
                  )
              )}
            </ScrollView>
          </View>
          <View className="p-4 bg-gray-900 flex-row justify-between gap-x-4">
            <View className="flex-1">
              <ButtonComponent
                text="Todo History"
                onPress={openHistoryModal}
                classNameProp="bg-gray-700 border-gray-800"
              />
            </View>
            <View className="flex-1">
              <ButtonComponent
                text="Add another Todo"
                onPress={openTodosModal}
                classNameProp="bg-blue-700"
              />
            </View>
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
