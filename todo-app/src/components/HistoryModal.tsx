import { Modal, TextInput, View, Image, ScrollView } from "react-native";
import colors from "tailwindcss/colors";

import { useTodos } from "src/contexts/TodosContext";
import ButtonComponent from "src/components/ButtonComponent";
import TodoCard from "./TodoCard";

type Props = {};

export default function HistoryModal({}: Props) {
  const { todos, showHistoryModal, closeHistoryModal } = useTodos();

  return (
    <Modal visible={showHistoryModal} animationType="slide">
      <View className="flex-1 bg-gray-950 items-center justify-center">
        <View className="flex-1 w-full pt-4 px-4">
          <ScrollView>
            {todos.map(
              (todo) =>
                todo.complete && (
                  <TodoCard
                    todo={todo}
                    options={{ showCompletedAt: true }}
                    key={todo.id}
                  />
                )
            )}
          </ScrollView>
        </View>
        <View className="flex-row justify-center gap-x-4 mt-4 px-4 pb-4">
          <View className="flex-1">
            <ButtonComponent
              onPress={closeHistoryModal}
              text="Close History"
              classNameProp="bg-red-700 border-red-800"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
