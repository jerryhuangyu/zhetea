import { StatusBar } from "expo-status-bar";
import { FlatList, Platform, StyleSheet } from "react-native";

import { Text, View } from "@/src/components/Themed";
import { useCart } from "@/providers/CartProvider";
import BasicBtn from "@/src/components/button/BasicBtn";
import CartCard from "../components/CartCard";

export default function CartScreen() {
  const { items, total } = useCart();
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartCard item={item} />}
      />
      {items.length > 0 && <Text style={styles.total}>Total: ${total}</Text>}
      {items.length > 0 && <BasicBtn text="Checkout" />}
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 5,
  },
  total: {
    marginTop: 20,
    marginRight: 10,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "right",
  },
  cartLists: {
    gap: 10,
  },
});
