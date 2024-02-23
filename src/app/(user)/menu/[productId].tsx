import { Stack, useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import AmountSelector from "@/src/components/selector/AmountSelector";
import { teaProducts } from "@/assets/data";
import { Amount } from "@/types";

const DetailPage = () => {
  const { productId } = useLocalSearchParams();
  const product = teaProducts.find((p) => p.id.toString() === productId);
  const [selected, setSelected] = useState<Amount>("四兩");

  if (!product) {
    return (
      <Text>
        <Stack.Screen options={{ title: "Not found" }} />
        Product not found
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image source={{ uri: product.image }} style={styles.image} />
      <AmountSelector selected={selected} setSelected={setSelected} />

      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default DetailPage;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    gap: 10,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderEndEndRadius: 8,
    borderEndStartRadius: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: "auto",
  },
});
