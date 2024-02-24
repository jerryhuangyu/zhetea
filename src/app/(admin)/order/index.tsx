import orders from "@/assets/data/orders";
import OrderCard from "@/src/components/card/OrderCard";
import { Stack, useSegments } from "expo-router";
import { FlatList } from "react-native";

export default function OrdersScreen() {
  const [firstSegment] = useSegments();
  return (
    <>
      <Stack.Screen options={{ title: "Orders" }} />
      <FlatList
        data={orders}
        contentContainerStyle={{ margin: 10, gap: 10 }}
        renderItem={({ item }) => (
          <OrderCard order={item} path={`/${firstSegment}/order/${item.id}`} />
        )}
      />
    </>
  );
}
