import { Pressable, Text } from "react-native";

type Props = {
  text?: string;
  onPress?: () => void;
  className?: string;
};

export default function ButtonComponent({ text, onPress, className }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className={`p-3 rounded-lg text-center ${className}`}
    >
      <Text className="text-white">{text}</Text>
    </Pressable>
  );
}
