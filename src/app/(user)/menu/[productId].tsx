import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { useState } from "react";

import { useCart } from "@/providers/CartProvider";
import AmountSelector from "@/src/components/selector/AmountSelector";
import BasicBtn from "@/src/components/button/BasicBtn";
import { teaProducts } from "@/assets/data";
import { Amount } from "@/types";
import Colors from "@/constants/Colors";

const DetailPage = () => {
  const { productId } = useLocalSearchParams();
  const router = useRouter();
  const { addOrUpdateItem } = useCart();
  const product = teaProducts.find((p) => p.id.toString() === productId);
  const [selected, setSelected] = useState<Amount>("四兩");
  const addToCart = () => {
    if (!product) return;
    addOrUpdateItem(product, selected);
    router.push("/cart");
  };

  if (!product) {
    return (
      <Text>
        <Stack.Screen options={{ title: "Not found" }} />
        Product not found
      </Text>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: product.name,
          headerTintColor: Colors.light.tint,
          headerTitleStyle: { color: "black" },
        }}
      />
      <ScrollView contentContainerStyle={styles.scrollview}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <AmountSelector selected={selected} setSelected={setSelected} />
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </ScrollView>
      <View style={styles.btnDiv}>
        <BasicBtn text="Add to cart" onPress={addToCart} />
      </View>
    </>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  scrollview: {
    paddingHorizontal: 10,
    gap: 25,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
  },
  description: {
    color: "#202020",
  },
  btnDiv: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingHorizontal: 10,
  },
});
