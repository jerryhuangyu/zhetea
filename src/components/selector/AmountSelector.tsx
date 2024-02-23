import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SelectorBtn from "@/src/components/button/SelectorBtn";
import Default from "@/constants/Default";
import { Amount } from "@/types";

type AmountSelectorProps = {
  selected: Amount;
  setSelected: React.Dispatch<React.SetStateAction<Amount>>;
};

const AmountSelector = ({ selected, setSelected }: AmountSelectorProps) => {
  return (
    <View>
      <Text style={styles.title}>Select size</Text>
      <View style={styles.container}>
        {Default.Amounts.map((amount) => (
          <SelectorBtn
            onPress={() => setSelected(amount)}
            isTrigger={selected === amount}
            text={amount}
            key={amount}
          />
        ))}
      </View>
    </View>
  );
};
export default AmountSelector;

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
  },
  container: {
    flexDirection: "row",
    gap: 6,
    marginTop: 6,
  },
});
