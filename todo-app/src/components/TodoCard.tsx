import { Text, View, Pressable } from "react-native";

import { useTodos } from "src/contexts/TodosContext";
import { TodoItem } from "src/types/index";
import ButtonComponent from "./ButtonComponent";

type Props = {
  todo: TodoItem;
  options: {
    showCompleteButton?: boolean;
    showCreatedAt?: boolean;
    showCompletedAt?: boolean;
  };
};

export default function TodoCard({ todo, options }: Props) {
  const { deleteTodo, completeTodo } = useTodos();
  return (
    <Pressable onPress={() => completeTodo(todo.id)}>
      <View className="flex-row bg-gray-700 border-b-4 border-gray-800 p-4 rounded-lg mb-4">
        <View className="flex-[2]">
          <Text className="text-xl text-white font-bold">{todo.title}</Text>
          {todo.description && (
            <Text className="mt-2 text-white">{todo.description}</Text>
          )}
          {options.showCreatedAt && (
            <Text className="mt-2 text-xs text-white">
              Created at: {todo.createdAt}
            </Text>
          )}
          {options.showCompletedAt && (
            <Text className="mt-2 text-xs text-white">
              Completed at: {todo.completedAt}
            </Text>
          )}
        </View>
        <View className="flex-1">
          {options.showCompleteButton && (
            <View className="flex-1 mb-4">
              <ButtonComponent
                text="Complete"
                classNameProp="bg-blue-700 border-blue-800"
                onPress={() => {
                  completeTodo(todo.id);
                }}
              />
            </View>
          )}
          <View className="flex-1 justify-center">
            <ButtonComponent
              text="Delete"
              classNameProp="bg-red-700 border-red-800"
              onPress={() => {
                deleteTodo(todo.id);
              }}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
}
