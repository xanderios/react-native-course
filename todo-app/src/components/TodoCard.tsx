import { StyleSheet, Text, View, Pressable } from "react-native";
import { useTodos } from "../contexts/TodosContext";
import COLORS from "../constants/colors";
import { TodoItem } from "../types";

type Props = {
  todoData: TodoItem;
  index: number;
};

export default function TodoCard({ todoData, index }: Props) {
  const { completeTodo } = useTodos();
  return (
    <Pressable onPress={() => completeTodo(todoData.id)}>
      <View style={[styles.todoCard, { marginTop: index == 0 ? 0 : 16 }]}>
        <Text style={styles.todoText}>{todoData.title}</Text>
        <Text style={styles.todoDateCreated}>{todoData.dateCreated}</Text>
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
  todoDateCreated: {
    fontSize: 10,
    color: COLORS.offWhite,
  },
});
