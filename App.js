import { useState } from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  Alert,
} from "react-native";

const COLORS = {
  "blue-900": "#1D3557",
  "blue-500": "#457B9D",
  "blue-300": "#A8DADC",
  "blue-100": "#F1FAEE",
  "red-500": "#E63946",
};

export default function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTodoInput = (text) => {
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
        todo: todoInput,
        dateCreated: formattedDate,
      },
    ]);
    setTodoInput("");
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar style="default" backgroundColor={COLORS["blue-500"]} />
      <View style={styles.inputContainer}>
        <TextInput
          value={todoInput}
          onChangeText={handleTodoInput}
          style={styles.textInput}
          placeholder="Add Todos here!"
        />
        <Pressable onPress={handleAddTodo} style={styles.addTodoBtn}>
          <Text style={styles.buttonText}>Add Todo</Text>
        </Pressable>
      </View>

      <View style={styles.horizontalLine} />

      {todos.length <= 0 ? (
        <Text style={styles.todoText}>List of Todos...</Text>
      ) : (
        <FlatList
          data={todos}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => index}
          renderItem={(todoData) => (
            <View
              style={[
                styles.todoCard,
                { marginTop: todoData.index == 0 ? 0 : 16 },
              ]}
            >
              <Text style={styles.todoText}>{todoData.item.todo}</Text>
              <Text style={styles.todoDateCreated}>
                {todoData.item.dateCreated}
              </Text>
            </View>
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
  textInput: {
    flex: 1,
    marginRight: 16,
    backgroundColor: COLORS["blue-100"],
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
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
  todoCard: {
    backgroundColor: COLORS["blue-500"],
    padding: 16,
    borderRadius: 8,
  },
  todoText: {
    color: COLORS["blue-100"],
  },
  todoDateCreated: {
    fontSize: 8,
    color: COLORS["blue-300"],
  },
});
