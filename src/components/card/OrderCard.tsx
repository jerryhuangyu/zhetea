import { Pressable, StyleSheet, Text, View } from "react-native";
import { Href, Link } from "expo-router";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Order } from "@/types";
import Colors from "@/constants/Colors";

dayjs.extend(relativeTime);

type OrderDisplayCardProps = { order: Order; highlight?: boolean };

export const OrderDisplayCard = ({
  order,
  highlight,
}: OrderDisplayCardProps) => {
  const highlightStyle = highlight ? styles.hightlight : null;
  return (
    <View style={{ ...styles.container, ...highlightStyle }}>
      <View>
        <Text style={styles.title}>Order #{order.id}</Text>
        <Text style={styles.time}>{dayjs().to(dayjs(order.created_at))}</Text>
      </View>
      <Text style={styles.status}>{order.status}</Text>
    </View>
  );
};

type OrderCardProps = {
  order: Order;
  path: string;
};

const OrderCard = ({ order, path }: OrderCardProps) => {
  return (
    <Link href={path as Href<string>} asChild>
      <Pressable>
        <OrderDisplayCard order={order} />
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
  hightlight: {
    borderColor: Colors.light.tint,
    borderWidth: 1,
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
