import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../styles/global";

type Props = {
  todoData: {
    title: string;
    dateCreated: string;
  };
  index: number;
};

export default function TodoCard({ todoData, index }: Props) {
  return (
    <View style={[styles.todoCard, { marginTop: index == 0 ? 0 : 16 }]}>
      <Text style={styles.todoText}>{todoData.title}</Text>
      <Text style={styles.todoDateCreated}>{todoData.dateCreated}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
