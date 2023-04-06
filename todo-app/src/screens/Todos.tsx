import { StyleSheet, View, FlatList, StatusBar } from "react-native";

import COLORS from "src/constants/colors";

import TodoCard from "src/components/TodoCard";
import TodoModal from "src/components/TodoModal";
import ButtonComponent from "src/components/ButtonComponent";
import { useTodos } from "src/contexts/TodosContext";

type Props = {};

export default function Todos({}: Props) {
  const { openTodosModal, todos } = useTodos();

  return (
    <View style={styles.todosContainer}>
      <StatusBar barStyle="light-content" />
      <TodoModal />

      {todos.length > 0 ? (
        <View style={{ width: "100%", height: "100%" }}>
          <FlatList
            data={todos}
            alwaysBounceVertical={false}
            keyExtractor={(item, index) => String(index)}
            contentContainerStyle={{ marginBottom: 16 }}
            renderItem={({ item, index }) => (
              <TodoCard todo={item} index={index} />
            )}
          />
          <ButtonComponent
            text="Add another Todo"
            onPress={openTodosModal}
            customStyle={styles.buttonWrapper}
          />
        </View>
      ) : (
        <ButtonComponent
          text="Add your first Todo!"
          onPress={openTodosModal}
          customStyle={styles.buttonWrapper}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  todosContainer: {
    backgroundColor: COLORS.offWhite,
    padding: 16,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonWrapper: {
    marginTop: 16,
    borderRadius: 8,
    backgroundColor: COLORS.primary,
  },
});
