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
    <Pressable onPress={() => completeTodo(todo.id)} key={index}>
      <View
        className={`bg-gray-700 border-b-4 border-gray-800 p-4 rounded-lg mb-4`}
      >
        <Text className="text-xl text-white font-bold">{todo.title}</Text>
        {todo.description && (
          <Text className="mt-2 text-white">{todo.description}</Text>
        )}
        <Text className="mt-2 text-xs text-white">{todo.dateCreated}</Text>
      </View>
    </Pressable>
  );
}
