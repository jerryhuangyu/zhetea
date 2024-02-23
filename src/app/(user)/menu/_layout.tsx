import { Stack } from "expo-router";
import CartBtn from "@/src/components/button/CartBtn";

const OrderLayout = () => {
  return (
    <Stack
      screenOptions={{
        title: "ZheTEA",
        headerRight: () => <CartBtn />,
      }}
    />
  );
};

export default OrderLayout;
