import { Text, View, Pressable } from "react-native";

import { useTodos } from "src/contexts/TodosContext";
import { TodoItem } from "src/types/index";

type Props = {
  todo: TodoItem;
  index: number;
};

export default function TodoCard({ todo, index }: Props) {
  const { completeTodo } = useTodos();
  return (
    <Pressable onPress={() => completeTodo(todo.id)}>
      <View
        className={`bg-blue-800 p-4 rounded-lg ${index == 0 ? "mt-0" : "mt-4"}`}
      >
        <Text className="text-xl text-white">{todo.title}</Text>
        {todo.description && (
          <Text className="mt-2 text-white">{todo.description}</Text>
        )}
        <Text className="mt-2 text-xs text-white">{todo.dateCreated}</Text>
      </View>
    </Pressable>
  );
}
