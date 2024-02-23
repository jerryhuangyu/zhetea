import { Pressable, StyleSheet, Text, View } from "react-native";
import { Href, Link } from "expo-router";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Order } from "@/types";

dayjs.extend(relativeTime);

type OrderCardProps = {
  order: Order;
  path: string;
};

const OrderCard = ({ order, path }: OrderCardProps) => {
  return (
    <Link href={path as Href<string>} asChild>
      <Pressable style={styles.container}>
        <View>
          <Text style={styles.title}>Order #{order.id}</Text>
          <Text style={styles.time}>{dayjs().to(dayjs(order.created_at))}</Text>
        </View>
        <Text style={styles.status}>{order.status}</Text>
      </Pressable>
    </Link>
  );
};
export default OrderCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontWeight: "700",
    marginVertical: 5,
  },
  time: {
    color: "gray",
  },
  status: {
    fontWeight: "500",
  },
});
