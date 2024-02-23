import { teaProducts } from "@/assets/data";
import { Stack, useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

const DetailPage = () => {
  const { productId } = useLocalSearchParams();
  const product = teaProducts.find((p) => p.id.toString() === productId);

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
      <Text>Select size</Text>

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
