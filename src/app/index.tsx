import { View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Button from "@/src/components/button/BasicBtn";

const NavBtn = ({ href, text }: { href: any; text: string }) => (
  <Link href={href} asChild>
    <Button text={text} />
  </Link>
);

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20, gap: 5 }}>
      <NavBtn href="/(user)/" text="User" />
      <NavBtn href="/(admin)/" text="Admin" />
      <NavBtn href="/(auth)/" text="Auth" />
    </View>
  );
};

export default HomeScreen;
