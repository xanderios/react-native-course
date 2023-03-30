import { useContext } from "react";
import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";

import { TodosContext, TodosProvider } from "./src/contexts/TodosContext";
import TodoCard from "./src/components/TodoCard";
import { COLORS } from "./src/styles/global";
import TodoInput from "./src/components/TodoInput";

export default function App() {
  const { todos, addTodo } = useContext(TodosContext);

  return (
    <TodosProvider>
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TodoInput />
          <Pressable onPress={addTodo} style={styles.addTodoBtn}>
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
    </TodosProvider>
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
