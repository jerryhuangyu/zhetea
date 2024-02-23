import Colors from "@/constants/Colors";
import { Product } from "@/types";
import { Text, StyleSheet, Pressable, Image } from "react-native";

type PreviewCardProps = {
  product: Product;
};

const PreviewCard = ({ product }: PreviewCardProps) => {
  return (
    <>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </>
  );
};
export default PreviewCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    padding: 10,
    borderRadius: 20,
    display: "flex",
    flex: 1,
    maxWidth: "49.5%",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "700",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 16,
  },
});
