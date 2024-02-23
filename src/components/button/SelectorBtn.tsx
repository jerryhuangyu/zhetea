import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import Colors from "@/constants/Colors";

type AmountSelectorBtnProps = {
  isTrigger: boolean;
  text: string;
  onPress: (event: GestureResponderEvent) => void;
};

const SelectorBtn = ({ isTrigger, text, onPress }: AmountSelectorBtnProps) => {
  const textStyle = {
    ...styles.text,
    color: isTrigger ? Colors.light.tint : "black",
  };
  const btnStyle = {
    ...styles.button,
    borderColor: isTrigger ? Colors.light.tint : "gray",
  };
  return (
    <Pressable onPress={onPress} style={btnStyle}>
      <Text style={textStyle}>{text}</Text>
    </Pressable>
  );
};
export default SelectorBtn;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    padding: 10,
    paddingHorizontal: 14,
    borderRadius: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
  },
});
