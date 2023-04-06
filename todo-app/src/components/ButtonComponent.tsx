import { Pressable, Text } from "react-native";
import classnames from "classnames";

type Props = {
  text?: string;
  onPress?: () => void;
  classNameProp?: string;
};

export default function ButtonComponent({
  text,
  onPress,
  classNameProp,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      className={classnames(
        "p-3 rounded-lg items-center bg-purple-800",
        classNameProp
      )}
    >
      <Text className="text-white">{text}</Text>
    </Pressable>
  );
}
