import { Stack, useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, ScrollView } from "react-native";
import FontAwesomeBtn from "@/src/components/button/FontAwesomeBtn";
import Colors from "@/constants/Colors";
import { teaProducts } from "@/assets/data";

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
    <>
      <Stack.Screen
        options={{
          title: product.name,
          headerTintColor: Colors.light.tint,
          headerTitleStyle: { color: "black" },
          headerRight: () => (
            <FontAwesomeBtn
              href={`/(admin)/menu/create?id=${productId}`}
              iconName="pencil"
            />
          ),
        }}
      />
      <ScrollView contentContainerStyle={styles.scrollview}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </ScrollView>
    </>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
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
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
  },
  description: {
    color: "#202020",
  },
});
