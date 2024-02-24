import { StyleSheet, Text, View } from "react-native";
import { Order } from "@/types";
import Default from "@/constants/Default";
import SelectorBtn from "../button/SelectorBtn";

type StatusSelectorProps = {
  order: Order;
};

const StatusSelector = ({ order }: StatusSelectorProps) => {
  return (
    <>
      <Text style={styles.title}>Status</Text>
      <View style={styles.container}>
        {Default.Statuses.map((status) => (
          <SelectorBtn
            isTrigger={order.status === status}
            text={status}
            onPress={() => console.warn("Update status")}
            key={status}
          />
        ))}
      </View>
    </>
  );
};
export default StatusSelector;

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    paddingBottom: 5,
  },
  container: {
    flexDirection: "row",
    gap: 5,
  },
});
