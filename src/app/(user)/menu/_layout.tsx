import CartBtn from "@/src/components/CartBtn";
import { Stack } from "expo-router";

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
