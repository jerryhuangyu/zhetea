import { Stack, useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { useState } from "react";
import AmountSelector from "@/src/components/selector/AmountSelector";
import BasicBtn from "@/src/components/button/BasicBtn";
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
    <>
      <Stack.Screen options={{ title: product.name }} />
      <ScrollView>
        <View style={styles.scrollview}>
          <Image source={{ uri: product.image }} style={styles.image} />
          <AmountSelector selected={selected} setSelected={setSelected} />
          <Text style={styles.price}>${product.price}</Text>
          <Text>{product.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.btnDiv}>
        <BasicBtn text="Add to cart" />
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
    flex: 1,
    gap: 10,
    flexGrow: 1,
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
  btnDiv: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingHorizontal: 10,
  },
});
