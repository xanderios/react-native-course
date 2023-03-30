import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  Alert,
} from "react-native";

import { TodoItem } from "./src/types";
import TodoCard from "./src/components/TodoCard";
import { COLORS } from "./src/styles/global";
import TodoInput from "./src/components/TodoInput";

export default function App() {
  const [todoInput, setTodoInput] = useState<string>("");
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const handleTodoInput = (text: string) => {
    setTodoInput(text);
  };

  const handleAddTodo = () => {
    if (todoInput == "") {
      Alert.alert(
        "Todos can't be empty!",
        "Your todo should have at least 1 character."
      );
      return;
    }

    const date = new Date();
    const formattedDate = date.toLocaleDateString();

    setTodos([
      ...todos,
      {
        title: todoInput,
        dateCreated: formattedDate,
      },
    ]);
    setTodoInput("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TodoInput value={todoInput} onChangeText={handleTodoInput} />
        <Pressable onPress={handleAddTodo} style={styles.addTodoBtn}>
          <Text style={styles.buttonText}>Add Todo</Text>
        </Pressable>
      </View>

      <View style={styles.horizontalLine} />

      {todos.length <= 0 ? (
        <Text>List of Todos...</Text>
      ) : (
        <FlatList
          data={todos}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item, index }) => (
            <TodoCard todoData={item} index={index} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: COLORS["blue-900"],
    padding: 16,
    paddingVertical: 48,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addTodoBtn: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: COLORS["blue-500"],
    borderRadius: 8,
  },
  buttonText: {
    color: COLORS["blue-100"],
  },
  horizontalLine: {
    height: 1,
    width: "100%",
    backgroundColor: COLORS["blue-500"],
    marginVertical: 16,
  },
});
