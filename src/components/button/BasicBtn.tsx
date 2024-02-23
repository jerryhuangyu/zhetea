import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { forwardRef } from "react";
import Colors from "@/constants/Colors";

type BasicBtnProps = {
  text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const BasicBtn = forwardRef<View, BasicBtnProps>(
  ({ text, ...pressableProps }, ref) => {
    return (
      <Pressable ref={ref} {...pressableProps} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    );
  }
);
export default BasicBtn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tint,
    padding: 15,
    alignItems: "center",
    borderRadius: 100,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});
