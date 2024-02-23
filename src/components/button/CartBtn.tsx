import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable } from "react-native";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";

const CartBtn = () => {
  return (
    <Link href="/cart" asChild>
      <Pressable>
        {({ pressed }) => (
          <FontAwesome
            name="shopping-cart"
            size={25}
            color={Colors.light.tint}
            style={{ opacity: pressed ? 0.5 : 1 }}
          />
        )}
      </Pressable>
    </Link>
  );
};
export default CartBtn;
