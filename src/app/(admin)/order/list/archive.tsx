import { Stack, useSegments } from "expo-router";
import { FlatList } from "react-native";
import OrderCard from "@/src/components/card/OrderCard";
import orders from "@/assets/data/orders";

const OrdersScreen = () => {
  const [fristPath] = useSegments();
  return (
    <>
      <Stack.Screen options={{ title: "Archive" }} />
      <FlatList
        data={orders}
        contentContainerStyle={{ margin: 10, gap: 10 }}
        renderItem={({ item }) => (
          <OrderCard order={item} path={`${fristPath}/order/${item.id}`} />
        )}
      />
    </>
  );
};
export default OrdersScreen;
