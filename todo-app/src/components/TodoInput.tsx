import React from "react";
import { StyleSheet, TextInput } from "react-native";

import { COLORS } from "../styles/global";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function TodoInput({ value, onChangeText }: Props) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={styles.textInput}
      placeholder="Add Todos here!"
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    marginRight: 16,
    backgroundColor: COLORS["blue-100"],
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
