import { withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";

const TopTabs = withLayoutContext(createMaterialTopTabNavigator().Navigator);

const OrderListLayout = () => {
  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: "white" }}>
      <TopTabs
        screenOptions={{
          tabBarActiveTintColor: "green",
          tabBarIndicatorStyle: { backgroundColor: "green" },
        }}
      />
    </SafeAreaView>
  );
};

export default OrderListLayout;
