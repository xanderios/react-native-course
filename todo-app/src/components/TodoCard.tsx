import { StyleSheet, Text, View, Pressable } from "react-native";

import COLORS from "src/constants/colors";
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
      <View style={[styles.todoCard, { marginTop: index == 0 ? 0 : 16 }]}>
        <Text style={styles.todoText}>{todo.title}</Text>
        {todo.description && (
          <Text style={styles.todoDescription}>{todo.description}</Text>
        )}
        <Text style={styles.todoDateCreated}>{todo.dateCreated}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  todoCard: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 8,
  },
  todoText: {
    fontSize: 20,
    color: COLORS.white,
  },
  todoDescription: {
    marginTop: 8,
    color: COLORS.white,
  },
  todoDateCreated: {
    marginTop: 8,
    fontSize: 10,
    color: COLORS.white,
  },
});
