import orders from "@/assets/data/orders";
import { Stack } from "expo-router";
import { FlatList, Text } from "react-native";

export default function OrdersScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Orders" }} />
      <FlatList
        data={orders}
        renderItem={({ item }) => <Text>hi</Text>}
        contentContainerStyle={{ margin: 10, gap: 10 }}
      />
    </>
  );
}
