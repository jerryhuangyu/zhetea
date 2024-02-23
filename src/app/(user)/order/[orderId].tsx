import orders from "@/assets/data/orders";
import { OrderDisplayCard } from "@/src/components/OrderCard";
import OrderDetailCard from "@/src/components/OrderDetailCard";
import { Stack, useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

const OrderDetailScreen = () => {
  const { orderId } = useLocalSearchParams();
  const order = orders.find((i) => i.id.toString() === orderId);

  if (!order) {
    return <Text>Not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Order #${orderId}` }} />
      <OrderDisplayCard order={order} highlight />
      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderDetailCard item={item} />}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
};
export default OrderDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
});
