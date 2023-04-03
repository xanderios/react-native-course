import { Pressable, Text, StyleSheet } from "react-native";

import COLORS from "../constants/colors";

type Props = {
  text?: string;
  onPress?: () => void;
};

export default function ButtonComponent({ text, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.addTodoBtn}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  addTodoBtn: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  buttonText: {
    color: COLORS.white,
  },
});
