import { Stack } from "expo-router";
import FontAwesomeBtn from "@/src/components/button/FontAwesomeBtn";

const OrderLayout = () => {
  return (
    <Stack
      screenOptions={{
        title: "ZheTEA",
        headerRight: () => (
          <FontAwesomeBtn href="/cart" iconName="shopping-cart" />
        ),
      }}
    />
  );
};

export default OrderLayout;
