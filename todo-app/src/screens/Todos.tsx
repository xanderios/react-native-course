import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native";

import COLORS from "../constants/colors";

import TodoCard from "../components/TodoCard";
import TodoInput from "../components/TodoInput";
import ButtonComponent from "../components/ButtonComponent";
import { useTodos } from "../contexts/TodosContext";

type Props = {};

export default function Todos({}: Props) {
  const { todos, addTodo } = useTodos();

  return (
    <View style={styles.appContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.inputContainer}>
        <TodoInput />
        <ButtonComponent onPress={addTodo} text="Add Todo" />
      </View>

      <View style={styles.horizontalLine} />

      {todos.length <= 0 ? (
        <Text style={styles.todoPlaceholder}>List of Todos...</Text>
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
    backgroundColor: COLORS.offWhite,
    padding: 16,
    paddingVertical: 48,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  horizontalLine: {
    height: 1,
    width: "100%",
    backgroundColor: COLORS.primary,
    marginVertical: 16,
  },
  todoPlaceholder: {
    color: COLORS.primary,
  },
});
