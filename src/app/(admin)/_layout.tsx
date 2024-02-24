import React from "react";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import { useClientOnlyValue } from "@/src/components/useClientOnlyValue";
import Colors from "@/constants/Colors";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Entypo>["name"];
  color: string;
}) {
  return <Entypo size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#a8bdb2",
        tabBarStyle: {
          backgroundColor: Colors.light.tint,
        },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="menu"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="cup" color={color} />,
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />
      <Tabs.Screen name="index" options={{ href: null }} />
    </Tabs>
  );
}
