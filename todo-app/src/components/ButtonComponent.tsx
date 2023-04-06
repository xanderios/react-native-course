import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";

import COLORS from "src/constants/colors";

type Props = {
  text?: string;
  onPress?: () => void;
  customStyle?: ViewStyle;
};

export default function ButtonComponent({ text, onPress, customStyle }: Props) {
  return (
    <Pressable onPress={onPress} style={[styles.buttonWrapper, customStyle]}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    textAlign: "center",
  },
  buttonText: {
    color: COLORS.white,
  },
});
